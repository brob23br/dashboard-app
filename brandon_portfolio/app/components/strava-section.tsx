
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Activity, MapPin, Clock, TrendingUp, Trophy, Target, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Mock Strava data - In production this would come from Strava API
const mockStravaData = {
  profile: {
    name: 'Brandon Robinson',
    totalActivities: 142,
    followers: 23,
    following: 45,
    totalDistance: 1247.3,
    totalElevation: 12850,
    totalTime: 98.5 // in hours
  },
  recentActivities: [
    {
      id: 1,
      name: 'Morning Trail Run',
      type: 'Run',
      distance: 9.6,
      elevation: 111,
      time: '1:03:34',
      date: '2025-08-25',
      location: 'Rock Hill, SC'
    },
    {
      id: 2,
      name: 'Strength Training Session',
      type: 'WeightTraining',
      time: '1:01:47',
      date: '2025-08-24',
      location: 'Local Gym'
    },
    {
      id: 3,
      name: 'Evening Ride',
      type: 'Ride',
      distance: 7.7,
      elevation: 78,
      time: '24:14',
      date: '2025-08-23',
      location: 'Charlotte, NC'
    }
  ],
  monthlyStats: {
    distance: 37.5,
    time: '20h 10m',
    activities: 12,
    elevation: 1205
  },
  achievements: [
    { name: 'You Got This: 100 Days powered by adidas', date: 'August 2025', type: 'Challenge' },
    { name: 'August Ten Days Active Challenge', date: 'August 2025', type: 'Challenge' },
    { name: 'August 400-Minute Challenge', date: 'August 2025', type: 'Challenge' },
    { name: 'August 5K x Brooks Challenge', date: 'August 2025', type: 'Challenge' }
  ]
}

const activityTypeIcons: { [key: string]: any } = {
  Run: '🏃‍♂️',
  Ride: '🚴‍♂️',
  WeightTraining: '🏋️‍♂️',
  Hike: '🥾',
  Walk: '🚶‍♂️'
}

const CountUpNumber = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function StravaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="strava" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Activity className="w-10 h-10 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
              Fitness Journey
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
            Maintaining an active lifestyle through running, cycling, and strength training. 
            Consistent dedication to fitness goals and community challenges.
          </p>
          <Button 
            variant="outline" 
            className="text-orange-600 border-orange-600 hover:bg-orange-50"
            onClick={() => window.open('https://www.strava.com/athletes/110985586', '_blank')}
          >
            <Activity className="w-4 h-4 mr-2" />
            View on Strava
          </Button>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <Card className="text-center border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-orange-600">
                {inView && <CountUpNumber end={mockStravaData.profile.totalActivities} />}
              </CardTitle>
              <CardDescription className="font-medium">Total Activities</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-red-600">
                {inView && <CountUpNumber end={Math.round(mockStravaData.profile.totalDistance)} />}
                <span className="text-lg ml-1">mi</span>
              </CardTitle>
              <CardDescription className="font-medium">Total Distance</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-blue-600">
                {inView && <CountUpNumber end={Math.round(mockStravaData.profile.totalElevation)} />}
                <span className="text-lg ml-1">ft</span>
              </CardTitle>
              <CardDescription className="font-medium">Total Elevation</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center border-0 shadow-md bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-green-600">
                {inView && <CountUpNumber end={Math.round(mockStravaData.profile.totalTime)} />}
                <span className="text-lg ml-1">hrs</span>
              </CardTitle>
              <CardDescription className="font-medium">Total Time</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Live Strava Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Activity className="w-6 h-6 text-orange-500" />
            <h3 className="text-3xl font-bold text-slate-800">Live Strava Feed</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/90 overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-slate-600 mb-4">
                    Connect with me on Strava to see real-time activity updates and join fitness challenges!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Strava Profile Widget */}
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                      <h4 className="font-bold text-slate-800 mb-4">Strava Profile</h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <p>• Follow my latest runs, rides, and workouts</p>
                        <p>• Join community challenges and competitions</p>
                        <p>• See detailed activity maps and statistics</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full text-orange-600 border-orange-600 hover:bg-orange-50"
                        onClick={() => window.open('https://www.strava.com/athletes/110985586', '_blank')}
                      >
                        <Activity className="w-4 h-4 mr-2" />
                        Follow on Strava
                      </Button>
                    </div>

                    {/* Activity Heatmap */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                      <h4 className="font-bold text-slate-800 mb-4">Activity Heatmap</h4>
                      <div className="space-y-2 text-sm text-slate-600">
                        <p>• Explore my running and cycling routes</p>
                        <p>• Discover popular local trails and paths</p>
                        <p>• See activity density across different areas</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                        onClick={() => window.open('https://www.strava.com/athletes/110985586/heatmaps/621d3d8c#12.00/-80.94000/35.11000/hot/all', '_blank')}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        View Heatmap
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="w-6 h-6 text-orange-500" />
              <h3 className="text-2xl font-bold text-slate-800">Recent Activities</h3>
            </div>
            
            <div className="space-y-4">
              {mockStravaData.recentActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/90">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{activityTypeIcons[activity.type] || '🏃‍♂️'}</span>
                          <div>
                            <h4 className="font-semibold text-slate-800">{activity.name}</h4>
                            <p className="text-sm text-slate-500">{activity.date}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {activity.type}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                        {activity.distance && (
                          <div className="flex items-center space-x-1 text-slate-600">
                            <MapPin className="w-3 h-3" />
                            <span>{activity.distance} mi</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1 text-slate-600">
                          <Clock className="w-3 h-3" />
                          <span>{activity.time}</span>
                        </div>
                        {activity.elevation && (
                          <div className="flex items-center space-x-1 text-slate-600">
                            <TrendingUp className="w-3 h-3" />
                            <span>{activity.elevation} ft</span>
                          </div>
                        )}
                        <div className="text-slate-500 text-xs">
                          {activity.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Monthly Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* This Month */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-slate-800">This Month</h3>
              </div>
              
              <Card className="border-0 shadow-md bg-white/90">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">
                        {mockStravaData.monthlyStats.distance} mi
                      </div>
                      <div className="text-sm text-slate-500">Distance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {mockStravaData.monthlyStats.time}
                      </div>
                      <div className="text-sm text-slate-500">Moving Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {mockStravaData.monthlyStats.activities}
                      </div>
                      <div className="text-sm text-slate-500">Activities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">
                        {mockStravaData.monthlyStats.elevation} ft
                      </div>
                      <div className="text-sm text-slate-500">Elevation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h3 className="text-2xl font-bold text-slate-800">Recent Achievements</h3>
              </div>
              
              <div className="space-y-3">
                {mockStravaData.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-sm bg-gradient-to-r from-yellow-50 to-orange-50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Trophy className="w-5 h-5 text-yellow-600" />
                          <div>
                            <h4 className="font-semibold text-slate-800 text-sm">
                              {achievement.name}
                            </h4>
                            <p className="text-xs text-slate-500">{achievement.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Consistency Breeds Excellence</h3>
            <p className="text-orange-100 max-w-3xl mx-auto mb-6">
              Maintaining an active lifestyle requires the same discipline and dedication that drives 
              success in technology projects. Every mile run and every challenge completed builds 
              resilience and determination.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8"
              onClick={() => window.open('https://www.strava.com/athletes/110985586', '_blank')}
            >
              <Activity className="w-4 h-4 mr-2" />
              Connect on Strava
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
