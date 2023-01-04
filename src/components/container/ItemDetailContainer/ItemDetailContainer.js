import React, {useState, useEffect}from 'react'
import './itemDetailContainer.css'
import ItemDetail from '../itemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import SquareLoader from "react-spinners/SquareLoader";
import {getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [data, setData]= useState({})

  /*cuando loading está en true se renderiza la animación y cuando se obtienen los datos de firestore
   vuelve a false para que los datos obtenidos se rendericen a través de ItemDetail */
  const [loading, setLoading]=useState(false)

  //deteccion dinámica de parámetro id para poder mostrar el detalle de una obra 
  const {id}= useParams()  


  useEffect(()=>{
    setLoading(true)
    const baseDatos = getFirestore()
    const detalleobra = doc(baseDatos,'obras', id)
    setLoading(false)
    getDoc(detalleobra).then((snapshot)=>{
      setData({id : snapshot.id, ...snapshot.data()})
    }) 
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
        <ItemDetail data={data} /> 
      </div>
    }
    </>
  )
}

export default ItemDetailContainer

