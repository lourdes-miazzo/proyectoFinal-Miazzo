import React from 'react'
import Item from '../Item/Item'


const ItemList = ({data}) => {
  return (
    data.map(obra => <Item key={obra.id} data={obra} className="orgItem"/>)
  )
}

export default ItemList