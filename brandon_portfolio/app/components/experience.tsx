
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const experience = [
  {
    title: 'IT Operations Apprentice: Datacenter Infrastructure & Cloud Operations',
    company: 'Atlas Copco Group',
    location: 'Rock Hill, SC',
    period: 'July 2025 – Present',
    type: 'Current Role',
    responsibilities: [
      'Monitor, maintain, and optimize datacenter infrastructure and Azure cloud resources',
      'Evaluate IT environments for mergers/acquisitions and recommend integration strategies',
      'Coordinate network/resource cutovers with minimal user disruption',
      'Automate server maintenance/refresh cycles and routine tasks via scripting'
    ],
    technologies: ['Azure Cloud', 'Datacenter Infrastructure', 'PowerShell', 'Automation', 'M&A Integration']
  },
  {
    title: 'Senior Technology Business Services Assistant',
    company: 'Wells Fargo',
    location: 'Charlotte, NC',
    period: 'Aug 2021 – June 2025',
    type: 'Previous Role',
    responsibilities: [
      'Led project tracking, configuration, and testing for technology initiatives',
      'Troubleshot network/software/hardware issues for ATMs and teller devices',
      'Managed milestones via Excel/proprietary databases; administered endpoint security exceptions',
      'Created Jira tickets and ServiceNow change requests for certificate management'
    ],
    technologies: ['ServiceNow', 'Jira', 'Network Troubleshooting', 'Project Management', 'Security Management']
  },
  {
    title: 'Business Technical Service Specialist',
    company: 'Wells Fargo',
    location: 'Charlotte, NC',
    period: 'Sep 2019 – Aug 2021',
    type: 'Previous Role',
    responsibilities: [
      'Provided phone/ticketing support for hardware/software/network issues',
      'Troubleshot teller device networks/DNS issues; escalated requests to meet SLAs'
    ],
    technologies: ['DNS', 'Network Support', 'Technical Support', 'SLA Management']
  },
  {
    title: 'Computer Networking Tutor / Help Desk Technician',
    company: 'York Technical College',
    location: 'Rock Hill, SC',
    period: '2018 – 2019',
    type: 'Previous Role',
    responsibilities: [
      'Assisted students with Windows Server, Active Directory, Group Policy, subnetting labs',
      'Provided Office 365 support and hardware troubleshooting'
    ],
    technologies: ['Windows Server', 'Active Directory', 'Group Policy', 'Office 365', 'Hardware Support']
  }
]

const education = [
  {
    degree: 'B.S. Cloud Computing – Amazon Web Services',
    school: 'Western Governors University',
    period: 'Anticipated April 2026',
    status: 'In Progress',
    focus: 'AWS Specialization with hands-on cloud architecture and security practices'
  },
  {
    degree: 'A.A.S Computer Technology: Networking',
    school: 'York Technical College',
    period: 'Graduated 2018',
    status: 'Completed',
    focus: 'Cum Laude - Comprehensive networking fundamentals and system administration'
  }
]

const certifications = [
  { name: 'CompTIA Project+', year: '2023', category: 'Project Management' },
  { name: 'CompTIA A+', year: '2024', category: 'Hardware' },
  { name: 'CompTIA Network+', year: '2024', category: 'Networking' },
  { name: 'CompTIA Security+', year: '2024', category: 'Security' },
  { name: 'CompTIA Cloud+', year: '2024', category: 'Cloud' },
  { name: 'AWS Certified Cloud Practitioner', year: '2024', category: 'AWS' },
  { name: 'LPI Linux Essentials', year: '2025', category: 'Linux' },
  { name: 'Microsoft AZ-900', year: '2025', category: 'Azure' }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Progressive career growth from technical support to cloud operations, with continuous 
            learning and certification achievements in modern IT technologies.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3 mb-12"
          >
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h3 className="text-3xl font-bold text-slate-800">Work Experience</h3>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="flex items-center space-x-4 text-base">
                          <span className="font-semibold text-blue-600">{job.company}</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex flex-col lg:items-end mt-3 lg:mt-0">
                        <Badge 
                          variant={job.type === 'Current Role' ? 'default' : 'secondary'}
                          className="mb-2"
                        >
                          {job.type}
                        </Badge>
                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-3 mb-12"
          >
            <GraduationCap className="w-8 h-8 text-green-600" />
            <h3 className="text-3xl font-bold text-slate-800">Education</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg leading-tight">{edu.degree}</CardTitle>
                      <Badge variant={edu.status === 'In Progress' ? 'secondary' : 'default'}>
                        {edu.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium text-green-600">
                      {edu.school}
                    </CardDescription>
                    <div className="flex items-center space-x-1 text-sm text-slate-500 mt-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{edu.focus}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center space-x-3">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-3xl font-bold text-slate-800">Certifications</h3>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2">
              8 Certifications
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-md"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  className="text-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="text-sm font-semibold text-slate-800 mb-1">{cert.name}</div>
                  <div className="text-xs text-slate-500 mb-2">{cert.year}</div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.category}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready for Solutions Architecture Challenges</h3>
            <p className="text-blue-100 max-w-4xl mx-auto mb-6 leading-relaxed">
              With progressive experience from technical support to datacenter operations, combined with 
              comprehensive cloud certifications and hands-on project experience, I'm prepared to design 
              and implement scalable, secure solutions that meet modern business requirements.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8"
              onClick={() => window.open('https://brob314.com', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
