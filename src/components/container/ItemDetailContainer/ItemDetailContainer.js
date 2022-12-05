import React, {useState, useEffect}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [data, setData]= useState([])
  const {id}= useParams()  

  useEffect(()=>{
  fetch("/data/fakeAPI.json")
  .then((res)=> res.json())
  .then((obj)=> setData(obj))
  }, [id]) 
 /*  const resultado = data.filter((item) => item.id.toString() === categoriaId.tostring()) */
  return (
    <div>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer 