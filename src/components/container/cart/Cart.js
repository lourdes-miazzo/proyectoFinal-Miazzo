import React, {useState} from 'react'
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './../itemCart/ItemCart'
import './cart.css'
import Formulario from '../formulario/Formulario'

const Cart = () => {
  //funcion y estado de context
  const {cart, totalPrice} = useCartContext()
  //estado y función para renderizar condicionalmente el formulario
  const [compForm, setCompForm] = useState(false)
  const renderCompForm= ()=>{
    setCompForm(true)
  }
  return (
    <>
    {
      cart.length === 0 
      ? 
      <div className='orgNoElem'>
      <div className='noElem'>
        <h3>No hay elementos en el carrito</h3> 
        <Link to="/"><button>Hacer compra</button></Link>
      </div>
      </div>
      : 
      <div className='orgCart'> 
          <h2 className='precioTotal'>total: ${totalPrice()}</h2>
          {
            compForm
            ?
            <Formulario/>
            :
            <div>
            <button onClick={renderCompForm} className='botonComprar'>Comprar</button>
            <div>{cart.map(obra => <ItemCart key={obra.id} data={obra}/>)}</div>
            </div>
          }
      </div>
    }
    </>
  )
}

export default Cart