import React from 'react'
import peliculas from '../../assets/pelicula.png'
import pizza from '../../assets/pizza.png'
import portafolio from '../../assets/portafolio.png'
import laboratorio from '../../assets/laboratorio.png'
import './cardFront.css'

export default function CardFront() {
  return (
    <div className='conten-front'>
      <div className='cardContainer'>

        <div className="front">
          <h1>PIZZERIA</h1>
          <img src={pizza} width="200px" height="130px" alt='' />

        </div>
        <div className="back">

          <p>Mi Primera pagina web, realizada con HTML y CSS </p>


        </div>
        <div>
          <a href="https://github.com/Geovanny89/pizzeriariccodipizza"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://app-pizzas.netlify.app/" ><ion-icon name="create-outline"></ion-icon></a>
        </div>
      </div>
      <div className='cardContainer'>

        <div className="front">
          <h1>SPA PELICULAS</h1>
          <img src={peliculas} width="200px" height="130px" alt="" />

        </div>
        <div className="back">

          <p>Aplicación creada con react que consume la api themoviedb, permite ver el listado de peliculas disponibles.
            <br />
          Técnologias React, Javascrip, axios.
          </p>
          


        </div>
        <div>
          <a href="https://github.com/Geovanny89/SPA-peliculas"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://p1-app-peliculas.netlify.app/" ><ion-icon name="create-outline"></ion-icon></a>
        </div>
      </div>


      <div className='card-container'>
        <div className='card-front'>
          <h1>PORTAFOLIO</h1>
          <img src={portafolio} width="200px" height="180px" alt="Img not Found" />
        </div>
        <div className='card-back'>
          <p>Portafolio de servicios, realizado con React y Javascript </p>
        </div>
        <div>
          <a href="https://github.com/Geovanny89/Portafolio"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          
          </a>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-front'>
          <h1>LABORATORIO TÉXTIL</h1>
          <img src={laboratorio} width="200px" height="150px" alt="Img not Found" />
        </div>
        <div className='card-back'>
          <p>Portafolio de Laboratorio Téxtil del Centro Técnologico De Cúcuta </p>
        </div>
        <div>
          <a href="https://github.com/Geovanny89/laboratorioctc"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          <a href="https://hilarious-llama-da5232.netlify.app/" ><ion-icon name="create-outline"></ion-icon></a>
          </a>
        </div>
      </div>
    </div>
  )
}
