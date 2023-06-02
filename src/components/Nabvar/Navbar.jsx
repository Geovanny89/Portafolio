import React from 'react'
import './navbar.css'
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
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Contacto</a></li>

                    </div>
                </ul>
          
        </div>
    )
}
