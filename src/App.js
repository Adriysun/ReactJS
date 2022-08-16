import React from 'react';
import Card from './components/Card/Card';
import Exemplo01 from './components/Exemplo01.js';
import NumeroAleatorio from './components/NumeroAleatorio';
import Infos from './components/Infos';
import Gostos from './components/Gostos';
import "./App.css";
import ExibeNotas from './components/ExibeNotas';



export default function App() {
return(
    <div className="App">
      
      <h1> Exemplos com React</h1>
      <div className="cards">
      <Card titulo="Título">
          <Exemplo01 nome="Adrian" idade="20"/>          
      </Card>

      <Card titulo="NumeroAleatorio">
        <NumeroAleatorio min={ 20 } max={ 40 } />
      </Card>

      <Card titulo="Info">
        <Infos escola="Cotuca" curso="DS"> </Infos>
      </Card>

      <Card titulo="Gostos">
        <Gostos gostos="Jogar"> </Gostos>
      </Card>

      <Card titulo="Comunicação direta">
        <ExibeNotas> </ExibeNotas>
      </Card>

    </div>
</div>
  );
}

// return apenas retorna UM elemento, como o exemplo da DIV acima, se
// for retirado a DIV, o return não pode retornar e funciona apenas
// UMA div.

// Para determinar uma váriavel, basta colocá-la entre chaves
// Exemplo: {props.primeiroNome}