import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logopagina.png'


export default function Navbar() {
    return (
        <div className='contenedor'>
           
                <ul className='navegacion'>
                    <div className='logo'>
                       < img className='imagen-transparente' src={logo} width="70px" height="60px" alt='logo'/>

                    </div>
                    <div className='derecha'>
                        <li><a href="#sobre-mi">Sobre Mi</a></li>
                        <li><a href="#skill" >Skill</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><Link to="/contacto" className='link-contacto'><a href="#">Contacto</a></Link></li>

                    </div>
                </ul>
          
        </div>
    )
}
