import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import {addDoc, getFirestore, collection} from 'firebase/firestore'
import './formulario.css'



const Formulario = () => {
    const {cart, totalPrice, clearCart} = useCartContext() 

    const precioFinal = totalPrice()

    const [id, setId]= useState()

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    }) 

    const orden = {
        comprador: form,
        obras: cart.map(obra=> ({id: obra.id, titulo: obra.titulo, precioIndividual: obra.precio, cantidad: obra.quantity})),
        precioFinal: precioFinal
    }

    const submitHandler = (e)=>{
        e.preventDefault()
            const baseDatos = getFirestore()
            const ordersCollection = collection(baseDatos, 'orders')
            addDoc(ordersCollection, orden).then(snapshot =>{
                console.log(snapshot.id)
                setId(snapshot.id)
                setTimeout(() => {
                    clearCart()
                }, 8000);
        })         
    }

    const changeHandler =(e) =>{
        const {value, name}=e.target
        setForm({...form, [name]: value})
    } 

    return (
        <>
            <div>
            {id !== undefined 
            ?
            <div className='orgFormCompleto'> 
            <div className='backFormCompleto'>
                <h2>Su pedido se ha enviado correctamente!</h2>
                <h3>Pedido: {id}</h3>
            </div>
            </div> 
            :
            <div className='backForm'>
                <h3>Completá tus datos</h3>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor='nombre'>Nombre y Apellido</label>
                        <input name="nombre" id="nombre" value={form.nombre} onChange={changeHandler} />
                    </div> 
                    <div>
                        <label htmlFor='email'>Email</label>
                        <br></br>
                        <input name="email" id="email" value={form.email} onChange={changeHandler}/>
                    </div> 
                    <div>
                        <label htmlFor='telefono'>Número de teléfono</label>
                        <br></br>
                        <input name="telefono" id="telefono" value={form.mensaje} onChange={changeHandler}/>
                    </div>
                    <button>Enviar</button> 
                </form>
            </div> 
            }
            </div>
        </>
    )
}

export default Formulario