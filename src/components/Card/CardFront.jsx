import React from 'react'
import peliculas from '../../assets/peliculas.jpg'
import pizza from '../../assets/pizza.jpg'
import './cardFront.css'

export default function CardFront() {
  return (
    <div className='conten-front'>
        <div className='card-peli'>
            <h1>SPA PELICULAS</h1>
            <img src={peliculas} width="200px" height="200px" alt="" />

        </div>
        <div className='card-pizza'>
            <h1>PIZZERIA</h1>
            <img src={pizza} width="200px" height="200px" alt="" />
        </div>
    </div>
  )
}
