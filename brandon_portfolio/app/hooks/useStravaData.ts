import { useState, useEffect } from 'react';

interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  start_date: string;
  start_date_local: string;
  location_city: string | null;
  location_state: string | null;
  location_country: string;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  average_speed: number;
  max_speed: number;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  pr_count: number;
}

interface StravaAthlete {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  created_at: string;
  profile_medium: string;
  profile: string;
}

interface StravaStats {
  recent_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
  recent_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    achievement_count: number;
  };
  ytd_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  ytd_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  all_ride_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
  all_run_totals: {
    count: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
  };
}

interface UseStravaDataReturn {
  activities: StravaActivity[];
  athlete: StravaAthlete | null;
  stats: StravaStats | null;
  loading: boolean;
  error: string | null;
}

export function useStravaData(): UseStravaDataReturn {
  const [activities, setActivities] = useState<StravaActivity[]>([]);
  const [athlete, setAthlete] = useState<StravaAthlete | null>(null);
  const [stats, setStats] = useState<StravaStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStravaData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch activities, athlete, and stats in parallel
        const [activitiesRes, athleteRes, statsRes] = await Promise.all([
          fetch('/api/strava?endpoint=activities&limit=5'),
          fetch('/api/strava?endpoint=athlete'),
          fetch('/api/strava?endpoint=stats')
        ]);

        // Check if all requests were successful
        if (!activitiesRes.ok || !athleteRes.ok || !statsRes.ok) {
          throw new Error('Failed to fetch Strava data');
        }

        const [activitiesData, athleteData, statsData] = await Promise.all([
          activitiesRes.json(),
          athleteRes.json(),
          statsRes.json()
        ]);

        // Check for API errors
        if (activitiesData.error || athleteData.error || statsData.error) {
          throw new Error(activitiesData.error || athleteData.error || statsData.error);
        }

        setActivities(activitiesData);
        setAthlete(athleteData);
        setStats(statsData);
      } catch (err) {
        console.error('Error fetching Strava data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch Strava data');
        
        // Set fallback data on error
        setActivities([]);
        setAthlete(null);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStravaData();
  }, []);

  return {
    activities,
    athlete,
    stats,
    loading,
    error
  };
}