import React, {useState, useContext}from "react";

const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)


const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(`carrito: `, cart)
   
    const totalPrice = () => {
      return cart.reduce((valorPrevio, valorActual)=> valorPrevio + valorActual.quantity * valorActual.precio, 0)
    }

    const totalArt = () => {
      return cart.reduce((artePrevio, arteActual)=> artePrevio + arteActual.quantity, 0)
    } 
    const clearCart =()=> setCart([])

    const isInCart =(id)=>{
      return cart.find(data=> data.id === id)? true : false } 
    
    const removeArt = (id)=> setCart(cart.filter(data => data.id !== id))

    const removerUnidad = (id)=> setCart(cart.map((data) =>{
      if(data.id === id){
        return {...data, quantity: data.quantity -1}
      }else{
        return data
      }
    }))

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


