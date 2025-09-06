
'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Cloud, Brain, Shield, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const skills = [
  { name: 'AWS Cloud', icon: Cloud, color: 'text-orange-500' },
  { name: 'AI & Automation', icon: Brain, color: 'text-purple-500' },
  { name: 'Cybersecurity', icon: Shield, color: 'text-red-500' },
  { name: 'Solutions Architecture', icon: Code2, color: 'text-blue-500' },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative parallax-bg pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Brandon Robinson
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 mb-4">
              IT Professional & Cloud Solutions Architect
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Passionate about designing scalable, secure cloud solutions with AWS and Azure, 
              AI automation, and cybersecurity. Currently pursuing Cloud Computing specialization 
              and working in datacenter infrastructure operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
                <span className="text-slate-700 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce"
          >
            <ChevronDown 
              className="w-8 h-8 text-slate-400 mx-auto cursor-pointer hover:text-slate-600 transition-colors"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
