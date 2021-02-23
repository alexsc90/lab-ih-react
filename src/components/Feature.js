//IMPORTACIONES
import React from 'react'

//FUNCIONES
function Feature (props) {
    return (
        <>
        <img src={props.img} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        </>
    )
} 
export default Feature
