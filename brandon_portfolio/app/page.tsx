import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Interests from '@/components/interests'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </main>
  )
}