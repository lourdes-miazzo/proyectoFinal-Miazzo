import "./itemListContainer.css"
import React, {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom" 
import {getDocs, getFirestore, collection} from 'firebase/firestore'
import SquareLoader from "react-spinners/SquareLoader";

const ItemListContainer=({greeting})=> {

const [data, setData]= useState([])
const [loading, setLoading]=useState(false)
const {categoryid}= useParams()  

useEffect(()=>{ 
 setLoading(true)
const baseDatos = getFirestore()
const coleccObras = collection(baseDatos, 'obras')
getDocs(coleccObras).then((snapshot)=>{
  const obras = snapshot.docs.map((doc)=>({
    id : doc.id,
    ...doc.data()
  }))
  setLoading(false)
  if(categoryid){
    setData(obras.filter(obra=> obra.anio === Number(categoryid)))
  }else{
    setData(obras)
  }
})
}, [categoryid])


  return (
    <>
     {
      loading 
      ?
      <div className="loading">
        <SquareLoader color="#464672"  size={90} cssOverride={{ marginTop : "14rem"}}/>
        <h3>Cargando...</h3>
      </div>
      :
      <div>
        <div className="orgCarrito">
        </div>
        <div className="orgItems">
        <ItemList data={data}/>
        </div>
      </div>
      }
    </>
  )
}


export default ItemListContainer