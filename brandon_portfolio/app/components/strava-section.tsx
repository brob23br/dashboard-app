'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Activity, MapPin, Calendar, Clock, TrendingUp, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function StravaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Mock data for display purposes
  const mockActivities = [
    {
      id: 1,
      name: "Morning Run",
      type: "Run",
      distance: 5200,
      moving_time: 1800,
      total_elevation_gain: 45,
      start_date: "2024-01-15T07:30:00Z",
      location_city: "San Francisco",
      location_state: "CA"
    },
    {
      id: 2,
      name: "Evening Bike Ride",
      type: "Ride",
      distance: 15000,
      moving_time: 2700,
      total_elevation_gain: 120,
      start_date: "2024-01-14T18:00:00Z",
      location_city: "San Francisco",
      location_state: "CA"
    }
  ];

  const mockStats = {
    recent_run_totals: {
      count: 12,
      distance: 62400,
      moving_time: 21600,
      elevation_gain: 540
    },
    recent_ride_totals: {
      count: 8,
      distance: 180000,
      moving_time: 21600,
      elevation_gain: 1200
    }
  };

  const formatDistance = (meters: number) => {
    const km = meters / 1000;
    return km.toFixed(1) + ' km';
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section id="strava" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Activity className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Fitness Journey
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Staying active and pushing boundaries through running, cycling, and outdoor adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Strava Profile Widget */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Brandon Robinson</h3>
                <p className="text-gray-600 dark:text-gray-300">Athlete Profile</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {mockStats.recent_run_totals.count + mockStats.recent_ride_totals.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Activities</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {formatDistance(mockStats.recent_run_totals.distance + mockStats.recent_ride_totals.distance)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Distance</div>
              </div>
            </div>

            <a
              href="https://www.strava.com/athletes/your-athlete-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <Activity className="w-5 h-5" />
              View Strava Profile
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Activity Heatmap Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Heatmap</h3>
            </div>

            <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-600 dark:text-gray-300">Interactive Activity Map</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Explore my running and cycling routes</p>
              </div>
            </div>

            <a
              href="https://www.strava.com/athletes/your-athlete-id/heatmaps/your-heatmap-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              View Activity Heatmap
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Activities</h3>
          </div>

          <div className="space-y-6">
            {mockActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{activity.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <Badge variant="secondary" className="text-xs">
                        {activity.type}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(activity.start_date)}
                      </span>
                      {activity.location_city && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {activity.location_city}, {activity.location_state}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {formatDistance(activity.distance)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatTime(activity.moving_time)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.strava.com/athletes/your-athlete-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              View All Activities
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {mockStats.recent_run_totals.count}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Recent Runs</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {mockStats.recent_ride_totals.count}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Recent Rides</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatDistance(mockStats.recent_run_totals.distance)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Running Distance</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {formatDistance(mockStats.recent_ride_totals.distance)}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Cycling Distance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}