import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logopagina.png';

export default function Navbar() {
  const [navbarOpacity, setNavbarOpacity] = useState(1);
  const [showProjectsMenu, setShowProjectsMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const navbarHeight = document.querySelector('.navegacion').offsetHeight;

      if (scrollPosition > navbarHeight) {
        setNavbarOpacity(0.6);
        setNavbarColor('red')
      } else {
        setNavbarOpacity(1);
        setNavbarColor('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleProjectsMenu = () => {
    setShowProjectsMenu(!showProjectsMenu);
  };

  const handleSubMenuClick = () => {
    setShowProjectsMenu(false);
  };

  return (
    <div className="contenedor">
      <ul className={`navegacion ${navbarColor}`} style={{ opacity: navbarOpacity }}>
        <div className="logo">
          <a href="/">
            <img
              className="imagen-transparente"
              src={logo}
              width="70px"
              height="60px"
              alt="logo"
            />
          </a>
        </div>
        <div className="derecha">
          <li>
            <a href="#sobre-mi">Sobre Mi</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li
            onMouseEnter={toggleProjectsMenu}
            onMouseLeave={toggleProjectsMenu}
          >
            <a href="javascript:void(0)">Proyectos </a>
            {showProjectsMenu && (
              <ul className="submenu" onClick={handleSubMenuClick}>
                <li>
                  <a href="#fullstack">FullStack</a>
                </li>
                <li>
                  <a href="#frontend">FrontEnd</a>
                </li>
                <li>
                  <a href="#backend">BackEnd</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contacto" className="link-contacto">
              Contacto
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
