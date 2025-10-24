import React, { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Navbar({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-40 top-0 left-0 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/10 dark:bg-gray-900/30 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3 md:py-4">
        {/* Logo / Nombre */}
        <a
          href="#home"
          className="font-semibold text-lg tracking-tight text-gray-500 dark:text-white"
        >
          Geo<span className="text-indigo-500">Dev</span>
        </a>

        {/* Links para pantallas grandes */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-white">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="relative hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Botones */}
        <div className="flex items-center gap-4">
          {/* Botón modo oscuro */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:scale-110 active:rotate-12 transition-transform text-gray-800 dark:text-gray-100"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Botón de contacto visible solo en desktop */}
          <a
            href="#contact"
            className="hidden md:inline-block px-4 py-2 rounded-lg border border-indigo-400 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Contactar
          </a>

          {/* Botón menú hamburguesa en móviles */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-800 dark:text-gray-100"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 py-4 bg-white/80 dark:bg-gray-900/90 backdrop-blur-md text-gray-800 dark:text-gray-100 border-t border-gray-200 dark:border-gray-700"
        >
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 rounded-lg border border-indigo-400 text-sm font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            Contactar
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
