import React, {useState, useContext}from "react";



const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)



const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState([])

    /* precio total de todas las obras en carrito, teniendo en cuenta si se compran varias del mismo id y 
    usando reduce para ir sumando lo que ya está en carrito con lo nuevo que se va seleccionando*/
    const totalPrice = () => {
      return cart.reduce((valorPrevio, valorActual)=> valorPrevio + valorActual.quantity * valorActual.precio, 0)
    }

    //cantidad de obras en carrito, usando reduce para ir sumando a las obras existentes en carrito, las nuevas seleccionadas
    const totalArt = () => {
      return cart.reduce((artePrevio, arteActual)=> artePrevio + arteActual.quantity, 0)
    } 

    //vaciar carrito seteando el estado a un array vacío
    const clearCart =()=> setCart([])

    //a través de id controlar si una obra está en carrito y devolver true o false
    const isInCart =(id)=>{
      return cart.find(data=> data.id === id)? true : false } 
    
    /* usar filter para armar un array que devuelva todo lo q está en carrito que no coincida
    con el id seleccionado, por lo que ese id y esa obra quedan fuera del nuevo array, por lo tanto eliminados */
    const removeArt = (id)=> setCart(cart.filter(data => data.id !== id))

    /* si el id de obra coincide con el id seleccionado se le resta a la cantidad 1 y se copia toda la data extra igual
    a como estaba antes */
    const removerUnidad = (id)=> setCart(cart.map((data) =>{
      if(data.id === id){
        return {...data, quantity: data.quantity -1}
      }else{
        return data
      }
    }))

    /* si la obra ya está en carrito suma unidades, si en cambio no se encuentra la agrega por primera
    vez teniendo en cuenta las cantidades seleccionadas en ItemCount */
    const addArt = (item, quantity)=>{
      if(isInCart(item.id)){
        setCart(cart.map(data =>{
          return data.id === item.id ? {...data, quantity: data.quantity + quantity} : data
        }))
        
      }else{
        setCart([...cart, {...item, quantity}])
      }
    
  
    }
  return (
    <CartContext.Provider value={{
      totalPrice,
      totalArt,
      clearCart, 
      isInCart, 
      removeArt, 
      removerUnidad,
      addArt,
      cart
      }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider


