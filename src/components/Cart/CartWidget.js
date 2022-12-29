import { Link } from "react-router-dom"
import "./cartWidget.css"
import iconoCarrito from "./iconoCarrito.png"
import { useCartContext } from "../../context/CartContext"

const CartWidget= ()=> {
  const {totalArt} = useCartContext()
  return (
    <>
      <Link to="/cart"><img src={iconoCarrito} className="iconoC" alt='carrito de compras'/></Link>
      <p>{ totalArt() || ""}</p>
    </>
  )
}

export default CartWidget