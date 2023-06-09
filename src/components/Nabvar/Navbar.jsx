import React, { useState,useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logopagina.png';

export default function Navbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNavBackground = () => {
      if (window.pageYOffset > 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
  
    window.addEventListener("scroll", changeNavBackground);
  
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, []);
  
  return (
    <div className="contenedor">
      <ul className={`navegacion ${scrollNav ? 'scroll' : ''}`}>
        <li>
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
        </li>
        
        <li>
          <a href="#sobre-mi">Sobre Mi</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li className="menu" onClick={() => setShowSubmenu(!showSubmenu)}
          onMouseEnter={() => setShowSubmenu(true)}
          onMouseLeave={() => setShowSubmenu(false)}>
          <a >Proyectos</a>
          <ul className={`submenu ${showSubmenu ? 'show' : ''}`}>
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
        </li>
        <li>
          <Link to="/contacto" className="link-contacto">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}
