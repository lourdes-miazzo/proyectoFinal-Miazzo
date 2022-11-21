import React from 'react'
import "./cardWidget.css"
import iconoCarrito from "./../../iconoCarrito.png"
function CardWidget() {
  return (
   <>
   { <img src={iconoCarrito} className="iconoC"/> }
   <p>0</p>
   </>
  )
}

export default CardWidget