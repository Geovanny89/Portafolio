import React from 'react'
import dog from '../../assets/dog.png'
import pokemon from '../../assets/pokemon.png'
import portafolio from '../../assets/portafolio.png'
import './card.css'

export default function Card() {
  return (
    <div className='card'>
      <div className='card-container'>
        <div className='card-front'>
          <h1>SPA DOG</h1>
          <img src={dog} width="200px" height="200px" alt="Img Not Found" />
        </div>
        <div className='card-back'>
          <p>Aplicación en la cual se consume una API que permite filtrar por orden alfabético, por razas y crear nuevos Perros.</p>
        </div>
        <div>
        <a href="https://github.com/Geovanny89/PI-DOGS-HENRY"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-front'>
          <h1>SPA POKEMON</h1>
          <img src={portafolio} width="200px" height="200px" alt="Img not Found" />
        </div>
        <div className='card-back'>
          <p>Aplicación en la cual se consume una API que permite filtrar por orden alfabético, por tipo y crear nuevos Pokemons.</p>
        </div>
        <div>
          <a href="https://github.com/Geovanny89/PI-POKEMON"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <div className='card-container'>
        <div className='card-front'>
          <h1>PORTAFOLIO</h1>
          <img src={pokemon} width="200px" height="200px" alt="Img not Found" />
        </div>
        <div className='card-back'>
          <p>Aplicación en la cual se consume una API que permite filtrar por orden alfabético, por tipo y crear nuevos Pokemons.</p>
        </div>
        <div>
          <a href="https://github.com/Geovanny89/Portafolio"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  )
}
