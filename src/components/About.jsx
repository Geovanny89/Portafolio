import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 flex flex-col items-center justify-center transition-colors duration-500 text-gray dark:bg-gray-300 dark:text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-accent dark:text-blue-600"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-gray-400 dark:text-gray-700 leading-relaxed"
        >
          <p>
            ¡Hola! Soy <strong>Geovanni Casadiegos Rodríguez</strong>, Ingeniero de
            Sistemas y Desarrollador Full Stack con sólida experiencia en el
            desarrollo de aplicaciones web modernas.
          </p>

          <p>
            Mi formación como <strong>Diseñador Web</strong> me permite unir la
            lógica del backend con interfaces atractivas, intuitivas y
            funcionales.
          </p>

          <p>
            He participado en proyectos utilizando tecnologías como{" "}
            <strong>Node.js</strong>, <strong>React</strong>, <strong>Redux</strong> y{" "}
            <strong>SQL</strong>, entre otras. Me apasiona la innovación tecnológica y
            me especializo en <strong>desarrollo backend</strong>, creando soluciones
            robustas, escalables y seguras.
          </p>

          <p>
            🚀 Siempre estoy en busca de nuevos desafíos donde pueda aportar mis
            habilidades, aprender y colaborar con equipos multidisciplinarios
            para construir productos que generen valor real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
