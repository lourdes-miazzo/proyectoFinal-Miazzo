import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../../context/CartContext'
import {addDoc, getFirestore, collection} from 'firebase/firestore'
import './formulario.css'



const Formulario = () => {
    const {cart, totalPrice, clearCart} = useCartContext() 

    const precioFinal = totalPrice()

    //si se define id, es porque se han enviado los datos a firestore por lo que puede renderizarse que el pedido fue enviado correctamente
    const [id, setId]= useState()

    const [form, setForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    }) 

    let fechaActual = new Date()

    //en orden se fusionan en un objeto los datos del comprador recientemente captados, con la info de las obras compradas, fecha y el precio total y se envían a firestore, obteniendo un id de compra
    const orden = {
        comprador: form,
        obras: cart.map(obra=> ({id: obra.id, titulo: obra.titulo, precioIndividual: obra.precio, cantidad: obra.quantity})),
        precioFinal: precioFinal,
        fecha: fechaActual
    }
    

    //envío de datos de la orden a firestore
    const submitHandler = (e)=>{
        e.preventDefault()
            const baseDatos = getFirestore()
            const ordersCollection = collection(baseDatos, 'orders')
            addDoc(ordersCollection, orden).then(snapshot =>{
                setId(snapshot.id)
                //desp de este tiempo el carrito se vacía y se vuelve a renderizar el aviso de carrito vacío en cart y desaparece el número en cartWidget
                setTimeout(() => {
                    clearCart()
                }, 8000);
        })  
            
    }

    //se setean en form los datos del comprador captados a traves de los e.target, en los input del formulario
    const changeHandler =(e) =>{
        const {value, name}= e.target
        setForm({...form, [name]: value})
    } 

    return (
        <>
            <div>
            {
                id !== undefined 
                ?
                <div className='orgFormCompleto'> 
                <div className='backFormCompleto'>
                    <h2>Su pedido se ha enviado correctamente!</h2>
                    <h3>Orden: {id}</h3>
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