import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo="#05 - Componente com Filhos" color="#0F5171">
                <Familia sobrenome="Ferreira ">
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>
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

            <Card titulo="#02 - Com Parâmetro" color="#251e3e">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#f37736">  
                <Primeiro />
            </Card>

        </div>

    </div>
);
