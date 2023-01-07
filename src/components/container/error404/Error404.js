import React from 'react'
import glitch from "./gl1.jpg"
import { Link } from 'react-router-dom'
import "./error404.css"

const Error404 = () => {
  return (
    <div className='orgError'>
        <h2>Error 404, página no encontrada </h2> 
        <img src={glitch} alt="obra glitcheada" className='imgError'/>
        <Link to="/"><button className='buttonError'>Volver al inicio</button></Link>
    </div>
  )
}

export default Error404