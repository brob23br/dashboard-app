'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'brob23.br@gmail.com',
    href: 'mailto:brob23.br@gmail.com',
    color: 'text-blue-600 bg-blue-50'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/brob314',
    href: 'https://www.linkedin.com/in/brob314/',
    color: 'text-blue-700 bg-blue-100'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Charlotte, NC Area',
    href: null,
    color: 'text-green-600 bg-green-50'
  }
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Interested in discussing cloud solutions, collaboration opportunities, or just want to connect? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-full ${item.color} mb-4`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">{item.label}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 font-medium">{item.value}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 max-w-2xl mx-auto"
            >
              <h4 className="text-xl font-semibold mb-4">Ready to Collaborate?</h4>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Whether you're looking for cloud architecture expertise, need help with AWS implementations, 
                or want to discuss emerging technologies, I'm excited to explore opportunities together.
              </p>
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Cloud Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Technical Consulting</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm">
            © 2025 Brandon Robinson. Built with Next.js, hosted on Vercel. 
          </p>
        </motion.div>
      </div>
    </section>
  )
}
