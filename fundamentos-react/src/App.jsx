import "./App.css";
import React from "react";

import Card from "./components/layout/Card"

import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

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
                <Aleatorio
                    valMin={1}
                    valMax={25}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#96ceb4">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#a32a23">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Lucas"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#f37736">  
                <Primeiro />
            </Card>

        </div>

    </div>
);
