import React from 'react'
import './contacto.css'
import { Link } from 'react-router-dom'

export default function Contacto() {
  return (
    <div>
        <form action="">
                <Link to="/"><button className='btn'>Volver</button></Link> 
                <h2>Contacto</h2>  
                <label htmlFor="">Nombre </label>
                <input type="text" name="nombre" id="nombre" placeholder='nombre' />
            
                <label htmlFor="">Apellido</label>
                <input type="text" name='apellido' id='apellido' placeholder='Apellido'/>
                <label htmlFor="">Telefono</label>
                <input type="text" name='telefono' id='telefono' placeholder='Telefono'/>
           
                <label htmlFor="">Mensaje</label>
                <textarea name="mensaje" placeholder='Escriba su mensaje'></textarea>
                <input type="button" value="enviar" id="boton" />
        
        </form>
    </div>
  )
}
