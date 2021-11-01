import "./Input.css";
import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input type="text" value={valor} onChange={quandoMudar} />
        {/* Se não for mudar o componente: marcar com o readOnly */}
        <input type="text" value={valor} readOnly />
        {/* Componente não controlado! */}
        <input type="text" value={undefined} />
      </div>
    </div>
  );
};
