import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto py-24">
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold">
          👋Soy <span className="text-accent">Geovanni Casadiegos Rodríguez</span>
        </motion.h1>
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="mt-4 text-lg text-gray-400 max-w-2xl">
          Desarrollador Full Stack — construyo aplicaciones web escalables con <strong>React</strong>, <strong>Node.js</strong> y bases de datos modernas.
        </motion.p>
        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-[var(--accent)] text-black font-semibold">Ver proyectos</a>
          <a href="/cv.pdf" className="px-4 py-2 rounded-md border border-gray-600">Descargar CV</a>
        </div>
      </div>
    </section>
  )
}
