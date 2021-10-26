import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ComParametro(props) {
  console.log(props);
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.aluno} tem nota {notaInt} e por isso está: {status}
      </p>
    </div>
  );
}

//  Propriedades são somennte para leitura. Não da para alterar uma propriedade;
