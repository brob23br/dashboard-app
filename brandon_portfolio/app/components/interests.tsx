
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mountain, Camera, Users, Wrench, Map, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

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

const jeepingImages = [
  {
    src: '/api/placeholder/400/300',
    alt: 'Red Jeep on mountain trail',
    caption: 'Trail exploration in the mountains'
  },
  {
    src: '/api/placeholder/400/300',
    alt: 'Jeep meetup with multiple vehicles',
    caption: 'Community jeep gathering'
  },
  {
    src: '/api/placeholder/400/300',
    alt: 'Off-road action shot through mud',
    caption: 'Tackling challenging muddy terrain'
  },
  {
    src: '/api/placeholder/400/300',
    alt: 'Jeep on scenic overlook',
    caption: 'Scenic overlook adventure'
  }
]

export default function Interests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

        {/* Jeeping Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Adventure Gallery</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A visual journey through jeeping adventures, showcasing the excitement of off-road exploration 
              and the beauty of outdoor landscapes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jeepingImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="relative aspect-[4/3] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-slate-200 rounded-xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-slate-300">Trails Explored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">365</div>
                <div className="text-slate-300">Days Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
