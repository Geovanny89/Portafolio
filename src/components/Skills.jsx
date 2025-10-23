import React from "react";

// Importa las imágenes (asegúrate que existan)
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/JavaScript-Logo.png";
import node from "../assets/nodejs.png";
import reactLogo from "../assets/react.png";
import redux from "../assets/red.png";
import postgres from "../assets/postg.png";
import mongo from "../assets/mongodb.png";

// Agrupaciones de habilidades en texto
const groups = {
  Frontend: ["React", "Redux", "Tailwind", "HTML", "CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  Tools: ["Git", "Postman"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b  via-gray-800 to-black text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Título principal */}
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>

        {/* Sección de logos */}
        <div className="skills-container mb-16 space-y-10">
          <div className="flex flex-wrap justify-center gap-10 conten1">
            {[html, css, javascript, node].map((img, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-transform transform hover:scale-110"
                data-aos="zoom-in"
              >
                <img src={img} alt={`Skill ${i}`} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-10 conten2">
            {[reactLogo, redux, postgres, mongo].map((img, i) => (
              <div
                key={i}
                className="flex justify-center items-center w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-transform transform hover:scale-110"
                data-aos="zoom-in"
              >
                <img src={img} alt={`Skill ${i}`} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Sección de grupos con texto */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groups).map(([groupName, skills]) => (
            <div
              key={groupName}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <h3 className="font-semibold text-xl text-cyan-400 mb-4 text-center">
                {groupName}
              </h3>
              <ul className="space-y-2 text-gray-300 text-center">
                {skills.map((skill) => (
                  <li key={skill} className="hover:text-white transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>
    </section>
  );
}
