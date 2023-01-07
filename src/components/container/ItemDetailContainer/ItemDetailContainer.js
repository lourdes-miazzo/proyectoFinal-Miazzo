import React, {useState, useEffect}from 'react'
import './itemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import SquareLoader from "react-spinners/SquareLoader";
import {getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [detail, setDetail]= useState({})

  /*cuando loading está en true se renderiza la animación y cuando se obtienen los datos de firestore
   vuelve a false para que los datos obtenidos se rendericen a través de ItemDetail */
  const [loading, setLoading]=useState(false)

  //deteccion dinámica de parámetro id para poder mostrar el detalle de una obra 
  const {id}= useParams()  

  useEffect(()=>{
    setLoading(true)
    const db = getFirestore()
    const itemRef = doc(db,'obras', id)
    getDoc(itemRef).then((snapshot)=>{
      setDetail({id : snapshot.id, ...snapshot.data()})
    }) 
    setLoading(false)
  }, [id])

  return (
    <>
    {
      loading 
      ?
      <div className="loading">
        <SquareLoader color="#464672"  size={90} cssOverride={{marginTop : "14rem"}}/>
        <h3>Cargando...</h3>
      </div>
      :
      <div>
        <ItemDetail data={detail} /> 
      </div>
    }
    </>
  )
}

export default ItemDetailContainer

