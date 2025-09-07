
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
        status: 'Completed',
        link: '/Demos/AWS Transfer Family/ExportBlock-91473283-e3d2-4894-b005-c87342639826-Part-1/AWS Transfer Family 122ac7152a5f80979fa8e27033a20c96.html'
      },
      {
        title: 'AWS Storage Services Exploration',
        description: 'Comprehensive analysis of S3, EFS, and FSx storage solutions for different use cases.',
        tags: ['S3', 'EFS', 'FSx', 'Storage'],
        status: 'Completed',
        link: '/Demos/AWS Storage Services/ExportBlock-fa4a4e44-9e0e-4cf8-8a1b-37305da35017-Part-1/AWS Storage Services 109ac7152a5f8020a126c9ccb894dd40.html'
      },
      {
        title: 'AWS CLI Windows Setup',
        description: 'Cross-platform CLI configuration and automation scripting for Windows environments.',
        tags: ['CLI', 'Windows', 'Automation'],
        status: 'Completed',
        link: '/Demos/AWS CLI Access on Windows/ExportBlock-8982da23-2a3b-4aa7-9ec0-3990a61ae7d2-Part-1/AWS CLI Access on Windows 12aac7152a5f80cfad4be5950aa2803d.html'
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
        status: 'Completed',
        link: '/Demos/Creating an EC2 Virtual Machine using AWS Management Console/ExportBlock-14d96ec6-7efa-47a9-ab7b-730df997e883-Part-1/Creating an EC2 Virtual Machine using AWS Manageme d6ef0b9fa3ed4e4faa7a71a4d7265714.html'
      },
      {
        title: 'VPC Design & Implementation',
        description: 'Multi-tier VPC architecture with public/private subnets, NAT gateways, and security groups.',
        tags: ['VPC', 'Subnets', 'Security Groups'],
        status: 'Completed',
        link: '/Demos/Creating a VPC/ExportBlock-82d06e9e-c75f-4e87-8886-7112a24ab7ee-Part-1/Creating a VPC b373fdaad0614ae7843bd1a387840789.html'
      },
      {
        title: 'AWS Global Infrastructure Study',
        description: 'Analysis of regions, availability zones, and edge locations for optimal deployment strategies.',
        tags: ['Global Infrastructure', 'Regions', 'AZ'],
        status: 'Completed',
        link: '/Demos/AWS Regions/ExportBlock-804384ea-670d-4b45-9e3e-7e68a05cf6e3-Part-1/AWS Regions, Availability Zones, and Global Edge N 3c684b0c83234fe7b4b45a311394327b.html'
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
        status: 'Completed',
        link: '/Demos/SSH-Keygen Tutorial/ExportBlock-aad59024-64c8-43a7-8e60-105304a74485-Part-1/SSH-keygen 697e52a4f4864a4b89b5be30db3fef5d.html'
      },
      {
        title: 'Linux Network Drive Mapping',
        description: 'CIFS/SMB network drive integration in Linux Mint with persistent mounting and security.',
        tags: ['Linux Mint', 'CIFS', 'Network'],
        status: 'Completed',
        link: '/Demos/Mapping a network drive in Linux Mint/ExportBlock-59aaf9cc-0593-4255-b407-564218956c14-Part-1/Mapping a network drive in Linux Mint 926fc5aa6ba14054ad45177ad197b93f.html'
      },
      {
        title: 'AWS CLI Linux Configuration',
        description: 'Native Linux CLI setup with credential management and shell script automation.',
        tags: ['CLI', 'Linux', 'Bash'],
        status: 'Completed',
        link: '/Demos/AWS CLI Access on Linux/ExportBlock-5496c849-44ba-4699-81e0-2e14adae75ab-Part-1/AWS CLI Access on Linux 12aac7152a5f800d9b34fc8b5889eb1e.html'
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
        status: 'Completed',
        link: '/Demos/AWS Organizations/ExportBlock-2054ac71-298c-4e88-8ac8-c90e031053ae-Part-1/AWS Organizations 128ac7152a5f80b3bbb8d2e88469c907.html'
      },
      {
        title: 'Organizational CloudTrail',
        description: 'Centralized logging and audit trail implementation across organizational units.',
        tags: ['CloudTrail', 'Logging', 'Compliance'],
        status: 'Completed',
        link: '/Demos/AWS Organizational Trail/ExportBlock-de78c282-1b7a-4ec0-b345-7e980cb53319-Part-1/Implementing an Organizational Trail 12aac7152a5f80f6aa4ac859dc5c6047.html'
      },
      {
        title: 'AWS Artifact Compliance',
        description: 'Compliance documentation management and security assessment reporting.',
        tags: ['Compliance', 'Security', 'Reporting'],
        status: 'Completed',
        link: '/Demos/AWS Artifact/ExportBlock-0565c41c-6956-4fa1-857a-5805574cea5f-Part-1/AWS Artifact 3f63451eb5c34ef69372b1190c7fe0ad.html'
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
        status: 'Completed',
        link: '/Demos/AWS Pricing Calculator Demo/ExportBlock-[ID]/[HTML_FILE].html' // Will need to find exact path
      },
      {
        title: 'AWS Knowledge Resources',
        description: 'Curated collection of documentation, tutorials, and best practices for AWS services.',
        tags: ['Documentation', 'Best Practices', 'Learning'],
        status: 'Ongoing',
        link: '/Demos/AWS Knowledge Resources/ExportBlock-[ID]/[HTML_FILE].html' // Will need to find exact path
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
        status: 'Completed',
        link: '/Demos/AWS Pricing Calculator Demo/ExportBlock-7ecfdd6a-deba-4bc6-a1ab-d7cc26addbd0-Part-1/AWS Pricing Calculator Demo 11563400f4fe4e6382f51ead6b28e633.html'
      },
      {
        title: 'AWS Knowledge Resources',
        description: 'Curated collection of documentation, tutorials, and best practices for AWS services.',
        tags: ['Documentation', 'Best Practices', 'Learning'],
        status: 'Ongoing',
        link: '/Demos/AWS Knowledge Resources/ExportBlock-af075f2f-c08f-4a35-85e6-fa495ee68c1d-Part-1/AWS Knowledge Resources c1b94348b2f34f5492efbe5f2d6e85b6.html'
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
            Projects & Labs
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
                          onClick={() => {
                            if (project.link) {
                              if (project.link.startsWith('http')) {
                                // External link (like GitHub)
                                window.open(project.link, '_blank');
                              } else {
                                // Local HTML demo file
                                window.open(project.link, '_blank');
                              }
                            }
                          }}
                          disabled={!project.link}
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
