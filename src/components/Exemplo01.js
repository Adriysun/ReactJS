import React from 'react';
export default function Exemplo01(props) {

    console.log(props);
    return (
        <div>
            <h1>Primeiro Componente!</h1>
            <p>
                Nome: {props.nome} 
            </p>
            <p>Idade: {props.idade} </p>
        </div>
    );}