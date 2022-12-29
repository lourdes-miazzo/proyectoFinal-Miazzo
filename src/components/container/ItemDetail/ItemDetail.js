import React, {useState} from 'react'
import "./itemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'



const ItemDetail = ({data}) => {
  const [irCarrito, setIrCarrito] =  useState(false)

  const {addArt}= useCartContext()

  const onAdd = (quantity)=>{
    setIrCarrito(true)
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
            {irCarrito ? 
            <div><Link to="/cart"><button>Finalizar tu compra</button></Link>
            <Link to="/"><button>Continuar comprando</button></Link> </div>: 
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>}
        </div>
      </div>
      
      </div> 
    </>
  )
}

export default ItemDetail