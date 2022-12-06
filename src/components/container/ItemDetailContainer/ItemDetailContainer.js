import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [data, setData]= useState({})
  const {id}= useParams()  

  useEffect(()=>{
  fetch("../data/fakeAPI.json")
  .then((res)=> res.json())
  .then((obj)=> setData(obj.find((item)=> item.id === Number(id))))
  }, [id]) 
  return (
    <div>
        <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer