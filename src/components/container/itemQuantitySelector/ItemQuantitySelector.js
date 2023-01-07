import React, { useState, useEffect } from 'react'
import "./itemQuantitySelector.css"

const ItemQuantitySelector = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial))
    const sumar = ()=> {
      setCount(count + 1 )
    }
    const restar = ()=>{
      setCount(count - 1)
    }
    useEffect(() => {
      setCount(parseInt(initial))
    }, [initial])
    const AddItemButton =()=>{
      onAdd(count)
    }
    const maxLimit = count >= stock
    const minLimit = count <= 1
    const disabledButton = stock <= 0
  return (
    <>
    <div className='card'>
      <div className='estiloBot'>
          <button disabled={maxLimit} onClick={sumar}> + </button>
          <input readOnly value={count}/>
          <button disabled={minLimit} onClick={restar}> - </button>
          <div>
            <button onClick={AddItemButton} disabled={disabledButton}>Agregar obra al carrito</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemQuantitySelector