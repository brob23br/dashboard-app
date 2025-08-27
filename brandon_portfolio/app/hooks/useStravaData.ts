import { useState, useEffect } from 'react'

interface StravaActivity {
  id: number
  name: string
  type: string
  distance: number
  elevation: number
  time: string
  date: string
  location: string
}

interface StravaStats {
  totalActivities: number
  totalDistance: number
  totalElevation: number
  totalTime: number
  monthlyStats: {
    distance: number
    time: string
    activities: number
    elevation: number
  }
}

interface StravaProfile {
  name: string
  followers: number
  following: number
  city: string
  state: string
  country: string
}

interface UseStravaDataOptions {
  type: 'activities' | 'stats' | 'profile'
  enabled?: boolean
  refreshInterval?: number // in milliseconds
}

interface UseStravaDataReturn<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useStravaData<T = any>(
  options: UseStravaDataOptions
): UseStravaDataReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    if (!options.enabled) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/strava?type=${options.type}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch Strava data')
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred')
      console.error('Error fetching Strava data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()

    // Set up polling if refreshInterval is provided
    if (options.refreshInterval && options.enabled) {
      const interval = setInterval(fetchData, options.refreshInterval)
      return () => clearInterval(interval)
    }
  }, [options.type, options.enabled, options.refreshInterval])

  return {
    data,
    loading,
    error,
    refetch: fetchData
  }
}

// Specific hooks for different data types
export function useStravaActivities(enabled = true, refreshInterval?: number) {
  return useStravaData<StravaActivity[]>({
    type: 'activities',
    enabled,
    refreshInterval
  })
}

export function useStravaStats(enabled = true, refreshInterval?: number) {
  return useStravaData<StravaStats>({
    type: 'stats',
    enabled,
    refreshInterval
  })
}

export function useStravaProfile(enabled = true) {
  return useStravaData<StravaProfile>({
    type: 'profile',
    enabled
  })
}