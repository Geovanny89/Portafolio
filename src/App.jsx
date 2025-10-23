
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
// import ParticlesBackground from './components/ParticlesBackground'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.remove('light')
      document.body.style.backgroundColor = ''
    } else {
      root.classList.add('light')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  return (
    <div className="">
      {/* <ParticlesBackground /> */}
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
