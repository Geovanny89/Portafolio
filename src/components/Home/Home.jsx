import React from 'react'
// import foto from '../../assets/fotoCv.png'
import foto from '../../assets/imagen.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/JavaScript-Logo.png'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import postgres from '../../assets/post.png'
import mongo from '../../assets/mongodb.png'
import 'animate.css';



import Navbar from '../Nabvar/Navbar'
import './home.css'

import Card from '../Card/Card'
import CardFront from '../Card/CardFront'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div className='container'>
            <Navbar />

            <div className='img-presentacion'>
                <img src={foto} width="200px" height="250px" alt="" />

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
                            <img src={html} width="130px" height="130px" alt="img Not Found" className="animate__animated animate__bounceIn"/>

                            <img src={css} width="130px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn" />

                            <img src={javascript} width="250px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                            <img src={node} width="130px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                        </div>
                        <b></b><br />
                        <div className='conten2'>
                            <img src={react} width="130px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                            <img src={redux} width="180px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                            <img src={postgres} width="180px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                            <img src={mongo} width="180px" height="130px" alt="Img not found" className="animate__animated animate__bounceIn"/>

                        </div>


                    </div>
                </div>
                <div className="proyectos">
                    <div id='proyectos'>
                    <h1>FULLSTACK</h1>
                        <Card/>
                        
                    </div>
                    <div>
                        <h1>FRONTEND</h1>
                        <CardFront/>
                    </div>
                    <div>
                        <h1>BACKEND</h1>
                        <Card/>
                    </div>
                </div>
            
            </div>
            <hr />
            <Footer/>
        </div>
    )
}
