import React from 'react'
import Item from '../item/Item'


const ItemList = ({data = []}) => {
  return (
    data.map(obra => <Item key={obra.id} data={obra} className="orgItem"/>)
  )
}

export default ItemList