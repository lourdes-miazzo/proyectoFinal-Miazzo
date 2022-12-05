import React, { useState, useEffect } from 'react'
import "./itemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
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
    
  return (
    <>
    <div className='card'>
      <div className='estiloBot'>
          <button disabled={count >= stock} onClick={sumar}> + </button>
          <input readOnly value={count}/>
          <button disabled={count <= 1} onClick={restar}> - </button>
          <div>
            <button onClick={()=> onAdd(count)} disabled={stock <= 0}>Agregar al carrito</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemCount