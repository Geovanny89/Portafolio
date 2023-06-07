import React from 'react'
import musica from '../../assets/apiMusica.png'
import inventario from '../../assets/inventario.png'
import './cardBack.css'

export default function CardBack() {
  return (
    <div className='card'>
      <div className='card-container'>
        <div className='card-front'>
          <h1>API MUSICA</h1>
          <img src={musica} width="200px" height="140px" alt="Img Not Found" />
        </div>
        <div className='card-back'>
          <p>Aplicación en la cual se consume una API que permite filtrar por orden alfabético, por razas y crear nuevos Perros.
            
          </p>
        </div>
        <div>
        <a href="https://github.com/Geovanny89/apiMusica"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      
      <div className='card-container'>
        <div className='card-front'>
          <h1>API INVENTARIO</h1>
          <img src={inventario} width="200px" height="140px" alt="Img not Found" />
        </div>
        <div className='card-back'>
          <p>Aplicación en la cual se consume una API que permite filtrar por orden alfabético, por tipo y crear nuevos Pokemons.</p>
        </div>
        <div>
          <a href="https://github.com/Geovanny89/inventario"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://www.linkedin.com/in/geovanny-casadiegos-rodriguez-86154a143/"><ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  )
}
