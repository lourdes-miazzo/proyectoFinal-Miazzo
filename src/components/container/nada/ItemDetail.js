import React, {useState} from 'react'
import "./itemDetail.css"
import ItemQuantitySelector from './ItemQuantitySelector'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'



const ItemDetail = ({data}) => {
  const [enviarACarrito, setEnviarACarrito] =  useState(false)

  const {addArt}= useCartContext()

  /*si se pulsa 'Agregar al carrito' en ItemCount el estado de enviarAcarrito cambia a verdadero y se renderizan
  los botones de finalizar compra y continuar comprando, además se dispara la funcion addArt que capta la info de ItemCount
  de la obra seleccionada y la cantidad de la misma  */
  const onAdd = (quantity)=>{
    setEnviarACarrito(true)
    addArt(data, quantity)
  }
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
            {
              enviarACarrito 
              ? 
              <div>
                <Link to="/cart"><button>Finalizar tu compra</button></Link>
                <Link to="/"><button>Continuar comprando</button></Link> 
              </div>
              : 
              <ItemQuantitySelector initial={1} stock={data.stock} onAdd={onAdd}/>
            }
        </div>
      </div>
      </div> 
    </>
  )
}

export default ItemDetail