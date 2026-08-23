import { useEffect } from 'react'
import useLenis from './hooks/useLenis'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import WhyHireMe from './components/WhyHireMe'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Certificates from './components/Certificates'
import GithubActivity from './components/GithubActivity'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  useEffect(() => {
    document.body.classList.add('antialiased')
  }, [])

  return (
    <>
      {/* <Preloader /> */}
      <CustomCursor />
      <div className="grain-overlay" />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Services />
        <WhyHireMe />
        <Achievements />
        <Testimonials />
        {/* <Certificates /> */}
        {/* <GithubActivity /> */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
