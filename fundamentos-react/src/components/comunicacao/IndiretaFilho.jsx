import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={function (ev) {
          props.quandoClicar("João", gerarIdade(), gerarNerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
