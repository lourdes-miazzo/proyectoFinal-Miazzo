import React from 'react'
import Greetings from './Greetings'
import "./itemListContainer.css"

function ItemListcontainer() {
  return (
    <>
    <div className='background'>
    <Greetings nombre="Ana" genero="a"/>
    <Greetings nombre="Pedro" genero="o"/>
    <Greetings />
    </div>
    </>
  )
}

export default ItemListcontainer