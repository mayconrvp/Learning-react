import React from 'react'

export default function(props){
    console.log(props);
    const notaInt = Math.ceil(props.nota);
    const status = notaInt >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.aluno} tem média {notaInt} e por isso está: {status}</p>
        </div>
    )
}

//  Propriedades são somente para leitura. Não da para alterar uma propriedade;