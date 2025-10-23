import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative mt-32 py-10 bg-transparent"
    >
      {/* Línea superior con gradiente suave */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-6 text-center md:text-left"
      >
        {/* Texto */}
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-indigo-500 hover:text-indigo-400 transition-colors">
            Geovanni Casadiegos
          </span>
          . Todos los derechos reservados.
        </p>

        {/* Redes */}
        <div className="flex items-center gap-6 text-xl">
          {/* GitHub */}
          <a
            href="https://github.com/Geovanny89"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573507918591"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-green-500 transition-transform hover:scale-110"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/geovanny-c-86154a143/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
