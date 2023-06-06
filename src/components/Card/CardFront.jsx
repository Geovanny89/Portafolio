import React from 'react'
import peliculas from '../../assets/pelicula.png'
import pizza from '../../assets/pizza.png'
import './cardFront.css'

export default function CardFront() {
  return (
    <div className='conten-front'>
      <div className='cardContainer'>

        <div className="front">
          <h1>SPA PELICULAS</h1>
          <img src={peliculas} width="200px" height="130px" alt="" />

        </div>
        <div className="back">

          <p>Aplicacion creada con react que consume una api y permite ver peliculas disponibles</p>


        </div>
        <div>
          <a href="https://github.com/Geovanny89/PI-DOGS-HENRY"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://p1-app-peliculas.netlify.app/" ><ion-icon name="create-outline"></ion-icon></a>
        </div>
      </div>

      <div className='cardContainer'>

        <div className="front">
          <h1>PIZZERIA</h1>
          <img src={pizza} width="200px" height="130px" alt='' />

        </div>
        <div className="back">

          <p>Mi Primera pagina web, realizada con HTML y CSS </p>


        </div>
        <div>
          <a href="https://github.com/Geovanny89/PI-DOGS-HENRY"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://app-pizzas.netlify.app/" ><ion-icon name="create-outline"></ion-icon></a>
        </div>
      </div>
    </div>
  )
}
