import React from 'react'
import dog from '../../assets/dog.png'
import pokemon from '../../assets/pokemon.png'
import './card.css'

export default function Card() {
  return (
    <div className='card'>
        <div className='card-dog'>
          <h1>SPA DOG</h1>
          <img src={dog} width="200px" height="200px" alt="Img Not Found" />
          <p>Una aplicaion en la cual se consume una api, para mostrar diferentes razas de perros</p>

        </div>
        <div className='card-pokemon'>
          <h1>SPA POKEMON</h1>
          <img src={pokemon} width="200px" height="200px" alt="Img not Found" />
          <p>Una aplicaion en la cual se consume una API, para mostrar diferentes tipos de Pokemon</p>
        </div>
    </div>
  )
}
