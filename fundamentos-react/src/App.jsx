import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#13 - Mega Sena" color="#4242AB ">
        <Mega sorts={6}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#424242 ">
        <Contador numeroInicial={100}></Contador>
      </Card>

      <Card titulo="#11 - Componente Controlado" color="#E45F56 ">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39 ">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C ">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#9823CD ">
        <ParOuImpar numero={20}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "fer@nando.com" }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Desafio Repetição">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#5E412F">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#FA6900">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro "></FamiliaMembro>
          <FamiliaMembro nome="Ana "></FamiliaMembro>
          <FamiliaMembro nome="Gustavo "></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#E94C6F">
        <Aleatorio valMin={1} valMax={25} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#96ceb4">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#a32a23">
        <ComParametro titulo="Situação do Aluno" aluno="Lucas" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#f37736">
        <Primeiro />
      </Card>
    </div>
  </div>
);
