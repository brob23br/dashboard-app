'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mountain, Camera, Users, Wrench, Map, Heart, Play, Image as ImageIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

const interests = [
  {
    title: 'Jeeping & Off-Road Adventures',
    icon: Mountain,
    description: 'Passionate about off-road exploration and trail navigation with my modified Jeep. Love tackling challenging terrain and discovering new trails.',
    color: 'text-orange-500 bg-orange-50',
    highlights: ['Trail Navigation', 'Vehicle Modifications', 'Outdoor Exploration', 'Off-Road Techniques']
  },
  {
    title: 'Automotive Photography',
    icon: Camera,
    description: 'Document jeeping adventures and automotive builds through photography. Capture both action shots and scenic moments from the trails.',
    color: 'text-blue-500 bg-blue-50',
    highlights: ['Action Photography', 'Landscape Shots', 'Vehicle Portraits', 'Adventure Documentation']
  },
  {
    title: 'Jeep Community & Meetups',
    icon: Users,
    description: 'Active participant in local jeep clubs and group adventures. Value the community aspect and shared experiences of off-road enthusiasts.',
    color: 'text-green-500 bg-green-50',
    highlights: ['Group Adventures', 'Community Events', 'Shared Experiences', 'Mentoring Newcomers']
  },
  {
    title: 'Vehicle Customization',
    icon: Wrench,
    description: 'Hands-on approach to vehicle modifications and upgrades. Understanding mechanical systems and optimizing performance for different terrains.',
    color: 'text-purple-500 bg-purple-50',
    highlights: ['Custom Modifications', 'Performance Tuning', 'Mechanical Systems', 'Problem Solving']
  },
  {
    title: 'Trail Mapping & Planning',
    icon: Map,
    description: 'Research and plan new trail routes, understanding terrain challenges and navigation requirements for safe group adventures.',
    color: 'text-indigo-500 bg-indigo-50',
    highlights: ['Route Planning', 'Terrain Analysis', 'Safety Protocols', 'GPS Navigation']
  },
  {
    title: 'Fitness & Active Lifestyle',
    icon: Heart,
    description: 'Maintain an active lifestyle through running, cycling, and strength training. Regular participation in fitness challenges and outdoor activities.',
    color: 'text-red-500 bg-red-50',
    highlights: ['Trail Running', 'Cycling', 'Weight Training', 'Fitness Challenges']
  }
]

const jeepingMedia = [
  // Images - All compressed and optimized for web
  {
    type: 'image',
    src: '/images/trail-mountain.jpg',
    alt: 'Peanut butter conditions',
    caption: 'Making sure the winch works'
  },
  {
    type: 'image',
    src: '/images/scenic-overlook.jpg',
    alt: 'Jeep positioned at scenic mountain overlook',
    caption: 'Dickey Bell descent'
  },
  {
    type: 'image',
    src: '/images/camber-rock.jpg',
    alt: 'Jeep navigating challenging rock formations',
    caption: 'Technical rock crawling and navigation'
  },
  {
    type: 'image',
    src: '/images/mud-terrain.jpg',
    alt: 'Trail entry',
    caption: 'Shakedown at Uhwarrie'
  },
  {
    type: 'image',
    src: '/images/dirty-jeep.jpg',
    alt: 'Muddy Jeep after successful trail adventure',
    caption: 'Rainy, muddy trail day'
  },
  {
    type: 'image',
    src: '/images/broken-lexus.jpg',
    alt: 'Recovery operation helping another vehicle',
    caption: 'Trail recovery and community support'
  },
  {
    type: 'image',
    src: '/images/spring-compressor.jpg',
    alt: 'Mechanical work and vehicle maintenance',
    caption: 'Non-Osha approved vehicle modifications'
  },
  {
    type: 'image',
    src: '/images/amos-jeep.jpg',
    alt: 'Supervisor Amos',
    caption: 'Supervisor Amos'
  },
  {
    type: 'image',
    src: '/images/jeep-meetup.jpg',
    alt: 'Group of Jeeps at community meetup event',
    caption: 'Building memories and friendships one trail at a time'
  },
  {
    type: 'image',
    src: '/images/prone-rest.jpg',
    alt: 'Taking a break during outdoor adventure',
    caption: 'Rest and reflection in nature'
  },

  // NEW IMAGES - Recently added from compressed media
  {
    type: 'image',
    src: '/images/morning-adventure.jpg',
    alt: 'Early morning trail adventure',
    caption: 'Starting the day with an adventure'
  },
  {
    type: 'image',
    src: '/images/early-morning-trail.jpg',
    alt: 'Early morning trail exploration',
    caption: 'Exploring new trails at sunrise'
  },
  {
    type: 'image',
    src: '/images/midday-exploration.jpg',
    alt: 'Midday trail exploration',
    caption: 'Discovering new paths'
  },
  {
    type: 'image',
    src: '/images/afternoon-journey.jpg',
    alt: 'Afternoon adventure journey',
    caption: 'Afternoon trail adventures'
  },
  {
    type: 'image',
    src: '/images/afternoon-trail-run.jpg',
    alt: 'Afternoon trail running',
    caption: 'Trail running in the afternoon'
  },
  {
    type: 'image',
    src: '/images/evening-adventure.jpg',
    alt: 'Evening adventure time',
    caption: 'Evening trail exploration'
  },

  // NEW IMAGES - From converted HEIC files (✅ CONVERTED!)
  {
    type: 'image',
    src: '/images/afternoon-trail-stop.jpg',
    alt: 'Afternoon trail rest stop',
    caption: 'Taking a break during afternoon adventures'
  },
  {
    type: 'image',
    src: '/images/late-afternoon-adventure.jpg',
    alt: 'Late afternoon trail adventure',
    caption: 'Late afternoon exploration and discovery'
  },
  {
    type: 'image',
    src: '/images/evening-trail-view.jpg',
    alt: 'I don\'t think it works that way',
    caption: 'Whoops'
  },
  {
    type: 'image',
    src: '/images/sunset-trail-moment.jpg',
    alt: 'Sunset trail moment',
    caption: 'Capturing the perfect sunset moment'
  },

  // Videos - All compressed for optimal web performance
  {
    type: 'video',
    src: '/videos/rock-crawling-compressed.mp4',
    alt: 'Technical rock crawling demonstration',
    caption: 'More skinny pedal (Dickey Bell ascent)'
  },
  {
    type: 'video',
    src: '/videos/trail-action-compressed.mp4',
    alt: 'Dynamic trail adventure footage',
    caption: 'Epic trail adventure in action'
  },
  {
    type: 'video',
    src: '/videos/mud-sliding.mp4',
    alt: 'Exciting mud terrain navigation',
    caption: 'Sliding through challenging mud terrain'
  },
  {
    type: 'video',
    src: '/videos/slow-descent.mp4',
    alt: 'Controlled descent on steep terrain',
    caption: 'Technical slow (scraping) descent'
  },

  // NEW VIDEOS - Recently added from compressed media
  {
    type: 'video',
    src: '/videos/evening-trail-action.mp4',
    alt: 'Evening trail action footage',
    caption: 'Dynamic evening trail adventure'
  },
  {
    type: 'video',
    src: '/videos/sunset-adventure.mp4',
    alt: 'Sunset adventure footage',
    caption: 'Epic sunset trail adventure'
  }
]

export default function Interests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null)

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Interests & Hobbies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond technology, I'm passionate about outdoor adventures, automotive culture, 
            and maintaining an active lifestyle. These interests fuel creativity and problem-solving skills.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`p-3 rounded-full ${interest.color}`}>
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{interest.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {interest.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-2">
                    {interest.highlights.map((highlight) => (
                      <div key={highlight} className="text-xs text-slate-500 bg-slate-50 rounded px-2 py-1">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Adventure Gallery with Images and Videos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Adventure Gallery</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive visual journey through jeeping adventures, featuring action-packed videos
              and stunning photography that showcase the thrill of off-road exploration, technical challenges,
              and the camaraderie of the off-road community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jeepingMedia.map((media, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="relative aspect-[4/3] group cursor-pointer"
                onClick={() => setSelectedMedia(index)}
              >
                <div className="absolute inset-0 bg-slate-200 rounded-xl overflow-hidden">
                  {media.type === 'image' ? (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        preload="metadata"
                        muted
                      >
                        <source src={media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-slate-800 ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Media type indicator */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/50 rounded-full p-2">
                      {media.type === 'image' ? (
                        <ImageIcon className="w-4 h-4 text-white" />
                      ) : (
                        <Play className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  
                  {/* Caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{media.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Media Modal/Lightbox */}
        {selectedMedia !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-slate-300"
                onClick={() => setSelectedMedia(null)}
              >
                ✕ Close
              </Button>
              
              {jeepingMedia[selectedMedia].type === 'image' ? (
                <Image
                  src={jeepingMedia[selectedMedia].src}
                  alt={jeepingMedia[selectedMedia].alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="max-w-full max-h-full rounded-lg"
                >
                  <source src={jeepingMedia[selectedMedia].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              
              <div className="text-center mt-4">
                <p className="text-white text-lg">{jeepingMedia[selectedMedia].caption}</p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6">Adventure Meets Technology</h3>
            <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              The problem-solving mindset developed through off-road challenges directly translates to 
              technical projects. Whether navigating difficult terrain or architecting cloud solutions, 
              success requires careful planning, adaptability, and the courage to explore uncharted territory.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
                <div className="text-slate-300">Years of Jeeping</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
                <div className="text-slate-300">Eye-witnessed vehicle rolls</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-slate-300">Cost of Repairs</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
