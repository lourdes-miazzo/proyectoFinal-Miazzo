import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({data}) => {
  return (
    <>
    <div className='orgItem'>
      <div className='backCardItem'>
        <div>
          <img  alt="" src={data.imagen} className="imgDetail"/>
        </div>
        <div className='textDesign'>
          <h3>{data.titulo}</h3>
          <p>{data.descripcion}</p>
          <p>Año: {data.anio}</p>
          <p>Tamaño: {data.tamaño}</p>
          <p>Precio: ${data.precio}</p>
          <p>Stock: {data.stock}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail