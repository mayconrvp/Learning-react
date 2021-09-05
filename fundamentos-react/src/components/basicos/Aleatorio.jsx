import React from "react";

export default function Aleatorio(props){
    const min = props.valMin;
    const max = props.valMax;
    const valRandom = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Valor aleatório</h2>
            <p>Valor mínimo: { min } </p>
            <p>Valor máximo: { max } </p>
            <p>Valor escolhido: {valRandom} </p>
        </div>
    )
}