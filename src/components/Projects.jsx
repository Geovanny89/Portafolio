import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import dog from '../assets/dog.png'
import pokemon from '../assets/pokemon.png'
import musica from '../assets/apiMusica.png'
import inventario from '../assets/inventario.png'
import pizza from '../assets/pizza.png'
import peliculas from '../assets/pelicula.png'
import portafolio from '../assets/portafolio.png'
import laboratorio from '../assets/laboratorio.png'
import moldeafit from '../assets/moldea.png'

const projects = [
  {
    title: 'SPA DOG',
    desc: 'Aplicación que consume la API TheDogApp, permite filtrar por orden alfabético, por razas y crear nuevos Perros.',
    tech: 'HTML | CSS | JavaScript | React | Redux | PostgreSQL',
    image: dog,
    links: {
      github: 'https://github.com/Geovanny89/PI-DOGS-HENRY',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    },
  },
  {
    title: 'SPA POKEMON',
    desc: 'Consume la PokéAPI, permite filtrar por tipo, orden alfabético y crear nuevos Pokemons.',
    tech: 'HTML | CSS | JavaScript | React | Redux | PostgreSQL',
    image: pokemon,
    links: {
      github: 'https://github.com/Geovanny89/PI-POKEMON',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    },
  },
  {
    title: 'API MÚSICA',
    desc: 'API creada con Node.js y Express. Permite CRUD de canciones y autenticación JWT.',
    tech: 'Node.js | Express | JWT | MongoDB',
    image: musica,
    links: {
      github: 'https://github.com/Geovanny89/apiMusica',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    },
  },
  {
    title: 'API INVENTARIO',
    desc: 'Sistema CRUD para controlar productos y equipos de una empresa.',
    tech: 'Node.js | Express | JavaScript',
    image: inventario,
    links: {
      github: 'https://github.com/Geovanny89/inventario',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    },
  },
  {
    title: 'PIZZERIA',
    desc: 'Mi primera web, creada solo con HTML y CSS.',
    tech: 'HTML | CSS',
    image: pizza,
    links: {
      github: 'https://github.com/Geovanny89/pizzeriariccodipizza',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
      demo: 'https://app-pizzas.netlify.app/',
    },
  },
  {
    title: 'SPA PELÍCULAS',
    desc: 'App con React que consume la API TheMovieDB para mostrar películas.',
    tech: 'React | JavaScript | Axios',
    image: peliculas,
    links: {
      github: 'https://github.com/Geovanny89/SPA-peliculas',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
      demo: 'https://p1-app-peliculas.netlify.app/',
    },
  },
  {
    title: 'PORTAFOLIO',
    desc: 'Portafolio personal creado con React y JavaScript.',
    tech: 'React | JavaScript',
    image: portafolio,
    links: {
      github: 'https://github.com/Geovanny89/Portafolio',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
    },
  },
  {
    title: 'LABORATORIO TÉXTIL',
    desc: 'Portafolio web del Laboratorio Textil del CTC.',
    tech: 'React | JavaScript',
    image: laboratorio,
    links: {
      github: 'https://github.com/Geovanny89/laboratorioctc',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
      demo: 'https://hilarious-llama-da5232.netlify.app/',
    },
  },
  {
    title: 'MOLDEAFIT',
    desc: 'eCommerce para la venta de fajas moldeadoras y productos de fitness.',
    tech: 'Nodejs | mongoDb | express | Jwtoken |React | JavaScript',
    image: moldeafit,
    links: {
      github: 'https://github.com/Geovanny89/moldeafit-front',
      linkedin: 'https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/',
      demo: 'https://moldeafit.store/',
    },
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b   text-white dark:from-gray-100 dark:to-gray-200 dark:text-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-cyan-600 dark:to-blue-700">
          Proyectos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/60 dark:bg-white/70 backdrop-blur-lg rounded-2xl p-5 shadow-lg hover:shadow-teal-500/30 dark:hover:shadow-blue-400/30 transition-all duration-300"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg mx-auto w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
              <p className="text-gray-300 dark:text-gray-700 text-sm mt-2">{p.desc}</p>
              <p className="text-xs text-gray-400 dark:text-gray-600 mt-3">{p.tech}</p>

              <div className="flex gap-4 mt-4 text-lg justify-center">
                {p.links.github && (
                  <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-teal-400 dark:hover:text-blue-600" />
                  </a>
                )}
                {p.links.linkedin && (
                  <a href={p.links.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-teal-400 dark:hover:text-blue-600" />
                  </a>
                )}
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="hover:text-teal-400 dark:hover:text-blue-600" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
