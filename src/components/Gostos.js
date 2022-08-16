import React from 'react';
export default function Gostos(props) {

    console.log(props);
    return(
        <div>
            <h1>Terceiro Componente!</h1>
            <p>
                Gosta de: {props.gostos} 
            </p>            
        </div>
    );}