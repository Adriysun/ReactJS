import React from 'react';
export default function Infos(props) {

    console.log(props);
    return (
        <div>
            <h1>Segundo Componente!</h1>
            <p>
                Estuda: {props.escola} 
            </p>
            <p> Curso: {props.curso} </p>
        </div>
    );}