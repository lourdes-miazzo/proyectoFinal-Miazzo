import React from 'react'


function Greetings({nombre, genero}) {
    return (
    <>
    <h3>Hola {nombre} bienvenid{genero} a mi pagina, aquí podrás ver todas las obras que tengo a la venta</h3>
    </>
    )
}
Greetings.defaultProps={
    nombre: "Usuario",
    genero: "o"
}
export default Greetings