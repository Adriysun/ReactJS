function App(props) {
  var situacao = ""

  if (props.nota >=5)
   situacao = "Aprovado"
  else
   situacao = "Reprovado"

  return (
    <div className="App">
     <h1>Teste ReactJS</h1>
     <h2>Seja bem-vindo {props.primeiroNome} {props.segundoNome} </h2>
     <h2>Sua média final é: {props.nota}</h2>
     <h2>Situação: {situacao}</h2>
     
    </div>
  );
}

export default App;

// return apenas retorna UM elemento, como o exemplo da DIV acima, se
// for retirado a DIV, o return não pode retornar e funciona apenas
// UMA div.

// Para determinar uma váriavel, basta colocá-la entre chaves
// Exemplo: {props.primeiroNome}