import { NextRequest, NextResponse } from 'next/server'

// Strava API configuration
const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET
const STRAVA_REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN

interface StravaActivity {
  id: number
  name: string
  type: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  start_date: string
  start_latlng: [number, number] | null
  location_city: string | null
  location_state: string | null
}

interface StravaStats {
  biggest_ride_distance: number
  biggest_climb_elevation_gain: number
  recent_ride_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
  recent_run_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
  ytd_ride_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
  ytd_run_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
  all_ride_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
  all_run_totals: {
    count: number
    distance: number
    moving_time: number
    elapsed_time: number
    elevation_gain: number
  }
}

async function refreshAccessToken(): Promise<string | null> {
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.error('Missing Strava API credentials')
    return null
  }

  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        refresh_token: STRAVA_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error('Error refreshing access token:', error)
    return null
  }
}

async function fetchStravaData(endpoint: string, accessToken: string) {
  try {
    const response = await fetch(`https://www.strava.com/api/v3${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching Strava data from ${endpoint}:`, error)
    return null
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type') || 'activities'

  // Get fresh access token
  const accessToken = await refreshAccessToken()
  if (!accessToken) {
    return NextResponse.json(
      { error: 'Failed to authenticate with Strava' },
      { status: 401 }
    )
  }

  try {
    let data
    
    switch (type) {
      case 'activities':
        // Get recent activities (last 30)
        data = await fetchStravaData('/athlete/activities?per_page=30', accessToken)
        break
        
      case 'stats':
        // Get athlete stats (requires athlete ID)
        const athlete = await fetchStravaData('/athlete', accessToken)
        if (athlete) {
          data = await fetchStravaData(`/athletes/${athlete.id}/stats`, accessToken)
        }
        break
        
      case 'profile':
        // Get athlete profile
        data = await fetchStravaData('/athlete', accessToken)
        break
        
      default:
        return NextResponse.json(
          { error: 'Invalid type parameter. Use: activities, stats, or profile' },
          { status: 400 }
        )
    }

    if (!data) {
      return NextResponse.json(
        { error: 'Failed to fetch data from Strava' },
        { status: 500 }
      )
    }

    // Transform data for frontend consumption
    const transformedData = transformStravaData(data, type)

    return NextResponse.json(transformedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes
      },
    })
  } catch (error) {
    console.error('Error in Strava API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function transformStravaData(data: any, type: string) {
  switch (type) {
    case 'activities':
      return data.map((activity: StravaActivity) => ({
        id: activity.id,
        name: activity.name,
        type: activity.type,
        distance: Math.round((activity.distance * 0.000621371) * 10) / 10, // Convert to miles
        elevation: Math.round(activity.total_elevation_gain * 3.28084), // Convert to feet
        time: formatTime(activity.moving_time),
        date: new Date(activity.start_date).toLocaleDateString(),
        location: activity.location_city && activity.location_state 
          ? `${activity.location_city}, ${activity.location_state}`
          : 'Unknown Location'
      }))
      
    case 'stats':
      const stats = data as StravaStats
      return {
        totalActivities: stats.all_run_totals.count + stats.all_ride_totals.count,
        totalDistance: Math.round((stats.all_run_totals.distance + stats.all_ride_totals.distance) * 0.000621371 * 10) / 10,
        totalElevation: Math.round((stats.all_run_totals.elevation_gain + stats.all_ride_totals.elevation_gain) * 3.28084),
        totalTime: Math.round((stats.all_run_totals.moving_time + stats.all_ride_totals.moving_time) / 3600 * 10) / 10,
        monthlyStats: {
          distance: Math.round((stats.recent_run_totals.distance + stats.recent_ride_totals.distance) * 0.000621371 * 10) / 10,
          time: formatTime(stats.recent_run_totals.moving_time + stats.recent_ride_totals.moving_time),
          activities: stats.recent_run_totals.count + stats.recent_ride_totals.count,
          elevation: Math.round((stats.recent_run_totals.elevation_gain + stats.recent_ride_totals.elevation_gain) * 3.28084)
        }
      }
      
    case 'profile':
      return {
        name: `${data.firstname} ${data.lastname}`,
        followers: data.follower_count,
        following: data.friend_count,
        city: data.city,
        state: data.state,
        country: data.country
      }
      
    default:
      return data
  }
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  } else {
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }
}