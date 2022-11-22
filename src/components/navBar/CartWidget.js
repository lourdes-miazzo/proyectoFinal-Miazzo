import "./cartWidget.css"
import iconoCarrito from "./iconoCarrito.png"
const CartWidget= ()=> {
  return (
    <>
      <a href="#q"><img src={iconoCarrito} className="iconoC" alt='carrito de compras'/></a>
      <p>2</p>
    </>
  )
}

export default CartWidget