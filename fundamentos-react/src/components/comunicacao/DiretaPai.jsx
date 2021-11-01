import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <DiretaFilho nome="João Guilherme" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Maria Andrade" idade={23} nerd={true}></DiretaFilho>
      <DiretaFilho nome="José Silva" idade={32} nerd={false}></DiretaFilho>
    </div>
  );
};
