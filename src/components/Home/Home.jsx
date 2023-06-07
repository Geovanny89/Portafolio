import React from 'react'
// import foto from '../../assets/fotoCv.png'
import foto from '../../assets/imagen.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/JavaScript-Logo.png'
import node from '../../assets/nodejs.png'
import react from '../../assets/react.png'
import redux from '../../assets/red.png'
import postgres from '../../assets/postg.png'
import mongo from '../../assets/mongodb.png'
import 'animate.css';



import Navbar from '../Nabvar/Navbar'
import './home.css'

import Card from '../Card/Card'
import CardFront from '../Card/CardFront'
import Footer from '../Footer/Footer'
import CardBack from '../Card/CardBack'

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
                    <p className='justificado'>
                    ¡Hola, Geovanni Casadiegos Rodriguez, Ingeniero de Sistemas! 👋 Soy un Desarrollador Full Stack con amplia experiencia en diversas tecnologías del sector. Mi formación incluye habilidades como Diseñador Web, lo que me permite crear interfaces atractivas y funcionales.
                        <br />
                        <br />
                        Como desarrollador, he trabajado en proyectos utilizando NodeJS, React, Redux y SQL, entre otras tecnologías. Me apasiona la tecnología y me especializo en el desarrollo Backend, lo que me permite crear aplicaciones robustas y escalables.
                        <br /><br />
                        Estoy emocionado de poner mis habilidades al servicio de proyectos desafiantes y colaborar en equipos multidisciplinarios. Si necesitas ayuda en el desarrollo de tu proyecto, no dudes en contar conmigo.

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
                    <div id='fullstack'>
                    <h1>FULLSTACK</h1>
                        <Card/>
                        
                    </div>
                    <div id='frontend'>
                        <h1>FRONTEND</h1>
                        <CardFront/>
                    </div>
                    <div id='backend'>
                        <h1>BACKEND</h1>
                        <CardBack/>
                    </div>
                </div>
            
            </div>
            <hr />
            <Footer/>
        </div>
    )
}
