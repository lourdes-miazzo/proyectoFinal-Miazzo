import "./cardWidget.css"
import iconoCarrito from "./iconoCarrito.png"
function CardWidget() {
  return (
   <>
   <img src={iconoCarrito} className="iconoC" alt='carrito de compras'/> 
   <p>0</p>
   </>
  )
}

export default CardWidget