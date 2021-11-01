import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <span>{props.nome} tem </span>
      <span>{props.idade} anos. </span>
      <span>Nerd: {props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
};
