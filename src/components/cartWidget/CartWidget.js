import { Link } from "react-router-dom"
import "./cartWidget.css"
import iconoCarrito from "./iconoCarrito.png"
import { useCartContext } from "../../context/CartContext"

const CartWidget= ()=> {
  /* traer la función desde context para contabilizar la cantidad de obras  en carrito y usarla para 
  mostar su número en el carrito de navbar */
  const {totalArt} = useCartContext()
  return (
    <>
      <Link to="/cart"><img src={iconoCarrito} className="iconoC" alt='carrito de compras'/></Link>
      <p>{ totalArt() || ""}</p>
    </>
  )
}

export default CartWidget