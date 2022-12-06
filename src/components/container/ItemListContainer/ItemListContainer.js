import "./itemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom" 


const ItemListContainer=({greeting})=> {

const [data, setData]= useState([])
const {categoryid}= useParams()  

useEffect(() => {
  obtDatos()
  
}, [categoryid])    

const obtDatos= async()=>{
    const datos = await fetch("../data/fakeAPI.json")
    const data = await datos.json()
  if(categoryid){
    setData(data.filter(obra=> obra.anio === categoryid))
  }else{
    setData(data)
  }
}

const onAdd = (quantity)=>{
  console.log(`Compraste ${quantity} unidades, muchas gracias!`)

  }
  return (
    <>
      <h3>{greeting}</h3>
      <div className="orgCarrito">
        <ItemCount initial={1} stock={14} onAdd={onAdd}/>
        <ItemCount initial={1} stock={6} onAdd={onAdd}/>
      </div>
      <div className="orgItems">
      <ItemList data={data}/>
      </div>
    </>
  )
}

export default ItemListContainer