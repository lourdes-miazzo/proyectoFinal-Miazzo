import "./itemListContainer.css"
import React, {useState, useEffect} from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom" 
import {getDocs, getFirestore, collection} from 'firebase/firestore'
import SquareLoader from "react-spinners/SquareLoader";

const ItemListContainer=({greeting})=> {

const [data, setData]= useState([])
const [loading, setLoading]=useState(false)

/* se usa el parámetro para captar las distintas categorías de año y renderizar entonces
soló las obras que coinciden con el año específico seleccionado */
const {categoryid}= useParams()  

useEffect(()=>{ 
 setLoading(true)
const db = getFirestore()
const itemsCollections = collection(db, 'obras')
getDocs(itemsCollections).then((snapshot)=>{
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
//cada vez que cambia categoryid el useEffect se vuelve a cargar y entonces se renderiza toda la obra de un año específico
}, [categoryid])


  return (
    <>
    <h3>{greeting}</h3>
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