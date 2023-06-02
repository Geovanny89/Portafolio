import React from 'react'
import foto from '../../assets/fotoCv.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/JavaScript-Logo.png'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.jpg'
import postgres from '../../assets/postgres.png'
import mongo from '../../assets/mongodb.png'


import Navbar from '../Nabvar/Navbar'
import './home.css'
export default function Home() {
    return (
        <div>
            <Navbar />

            <div className='img-presentacion'>
                <img src={foto} width="300px" height="300px" alt="" />

            </div>
            <div className='seccion'>

                <div className='sobre' id='sobre-mi'>
                    <h1>Sobre Mi</h1>
                    <p >
                        ¡Hola! Soy el Ing. de Sistemas Geovanni Casadiegos Rodriguez, Desarrollador Full Stack Developer con formación como Diseñador Web,poseo experiencia trabajando en NodeJS, React, Redux, SQL entre otras tecnologías del sector, me apasiona la tecnología, mi fuerte es el Back, soy graduado de la Corporación Universitaria Remington Colombia, soy técnico en sistemas y tecnólogo en redes de computadores.

                    </p>

                </div>
                <div className='habilidades' id='skill'>
                    <h2>SKILL</h2>
                    <div className='skills-container' >
                        <div className='conten1'>
                            <img src={html} width="130px" height="130px" alt="img Not Found" />

                            <img src={css} width="130px" height="130px" alt="Img not found" />

                            <img src={javascript} width="250px" height="130px" alt="Img not found" />

                            <img src={node} width="130px" height="130px" alt="Img not found" />

                        </div>
                        <b></b><br />
                        <div className='conten2'>
                            <img src={react} width="130px" height="130px" alt="Img not found" />

                            <img src={redux} width="180px" height="130px" alt="Img not found" />

                            <img src={postgres} width="180px" height="130px" alt="Img not found" />

                            <img src={mongo} width="180px" height="130px" alt="Img not found" />

                        </div>


                    </div>
                </div>
            
            </div>
        </div>
    )
}
