
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Server, Cloud, Shield, Terminal, Database, Network } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const projectCategories = [
  {
    name: 'AWS Cloud Services',
    icon: Cloud,
    color: 'text-orange-500 bg-orange-50',
    projects: [
      {
        title: 'AWS Transfer Family Implementation',
        description: 'Secure file transfer service setup with SFTP protocols for enterprise data exchange.',
        tags: ['AWS', 'SFTP', 'Security', 'File Transfer'],
        status: 'Completed'
      },
      {
        title: 'AWS Storage Services Exploration',
        description: 'Comprehensive analysis of S3, EFS, and FSx storage solutions for different use cases.',
        tags: ['S3', 'EFS', 'FSx', 'Storage'],
        status: 'Completed'
      },
      {
        title: 'AWS CLI Windows Setup',
        description: 'Cross-platform CLI configuration and automation scripting for Windows environments.',
        tags: ['CLI', 'Windows', 'Automation'],
        status: 'Completed'
      }
    ]
  },
  {
    name: 'AWS Compute & Networking',
    icon: Network,
    color: 'text-blue-500 bg-blue-50',
    projects: [
      {
        title: 'EC2 Virtual Machine Architecture',
        description: 'Scalable EC2 deployment with auto-scaling groups and load balancers for high availability.',
        tags: ['EC2', 'Auto Scaling', 'Load Balancer'],
        status: 'Completed'
      },
      {
        title: 'VPC Design & Implementation',
        description: 'Multi-tier VPC architecture with public/private subnets, NAT gateways, and security groups.',
        tags: ['VPC', 'Subnets', 'Security Groups'],
        status: 'Completed'
      },
      {
        title: 'AWS Global Infrastructure Study',
        description: 'Analysis of regions, availability zones, and edge locations for optimal deployment strategies.',
        tags: ['Global Infrastructure', 'Regions', 'AZ'],
        status: 'Completed'
      }
    ]
  },
  {
    name: 'Linux Administration',
    icon: Terminal,
    color: 'text-green-500 bg-green-50',
    projects: [
      {
        title: 'SSH Key Authentication System',
        description: 'Secure SSH-keygen implementation with public/private key management and automated deployment.',
        tags: ['SSH', 'Security', 'Automation'],
        status: 'Completed'
      },
      {
        title: 'Linux Network Drive Mapping',
        description: 'CIFS/SMB network drive integration in Linux Mint with persistent mounting and security.',
        tags: ['Linux Mint', 'CIFS', 'Network'],
        status: 'Completed'
      },
      {
        title: 'AWS CLI Linux Configuration',
        description: 'Native Linux CLI setup with credential management and shell script automation.',
        tags: ['CLI', 'Linux', 'Bash'],
        status: 'Completed'
      }
    ]
  },
  {
    name: 'AWS Management & Governance',
    icon: Shield,
    color: 'text-purple-500 bg-purple-50',
    projects: [
      {
        title: 'AWS Organizations Setup',
        description: 'Multi-account organization structure with consolidated billing and access management.',
        tags: ['Organizations', 'Multi-Account', 'Billing'],
        status: 'Completed'
      },
      {
        title: 'Organizational CloudTrail',
        description: 'Centralized logging and audit trail implementation across organizational units.',
        tags: ['CloudTrail', 'Logging', 'Compliance'],
        status: 'Completed'
      },
      {
        title: 'AWS Artifact Compliance',
        description: 'Compliance documentation management and security assessment reporting.',
        tags: ['Compliance', 'Security', 'Reporting'],
        status: 'Completed'
      }
    ]
  },
  {
    name: 'Cost & Resource Management',
    icon: Database,
    color: 'text-indigo-500 bg-indigo-50',
    projects: [
      {
        title: 'AWS Pricing Calculator',
        description: 'Cost optimization analysis and pricing comparison for various AWS service configurations.',
        tags: ['Cost Optimization', 'Pricing', 'Analysis'],
        status: 'Completed'
      },
      {
        title: 'AWS Knowledge Resources',
        description: 'Curated collection of documentation, tutorials, and best practices for AWS services.',
        tags: ['Documentation', 'Best Practices', 'Learning'],
        status: 'Ongoing'
      }
    ]
  },
  {
    name: 'Professional Development',
    icon: Server,
    color: 'text-red-500 bg-red-50',
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Modern, responsive portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, interactive components, and cloud deployment.',
        tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Vercel', 'AWS'],
        status: 'Completed',
        link: 'https://github.com/brob23br/dashboard-app'
      },
      {
        title: 'AWS Solutions Architect Preparation',
        description: 'Comprehensive study program including hands-on labs and practice examinations.',
        tags: ['Certification', 'SAA-C03', 'Study'],
        status: 'In Progress'
      }
    ]
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Projects & Labs <b>(Section WIP)</b>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hands-on exploration of cloud technologies, infrastructure automation, and security implementations. 
            Each project demonstrates practical application of modern IT solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-full ${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">{category.name}</h3>
                <Badge variant="outline" className="text-sm">
                  {category.projects.length} Project{category.projects.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (projectIndex * 0.1) }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                          <Badge 
                            variant={project.status === 'Completed' ? 'default' : 
                                   project.status === 'In Progress' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-between text-sm"
                          onClick={() => window.open('#projects', '_self')}
                        >
                          View Details
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Continuous Learning & Innovation
            </h3>
            <p className="text-slate-600 mb-6">
              These projects represent ongoing exploration into emerging technologies and best practices. 
              Each implementation focuses on real-world applications and scalable solutions.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>15 Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>8 Certifications Earned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Continuous Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
