import React from "react";
import TelaDeUsuario from "./components/TelaDeUsuarios";
import TelaDeCadastro from "./components/TelaDeCadastro";



export default class App extends React.Component {

state = {
  telaAtual: "cadastro"
}

escolheTela = () =>{
    switch (this.state.telaAtual){
  case "cadastro":
  return <TelaDeCadastro  irParaLista={this.irParaLista} />
  case "lista":
  return <TelaDeUsuario irParaCadastro={this.irParaCadastro} />
  default:
    return <div>Erro! Página não encontrada!</div>
    }
}
irParaCadastro =()=>{
   this.setState({telaAtual:"cadastro"})
}

irParaLista = () => {
  this.setState({telaAtual:"lista"})



}

   render(){
    return(
      <div>
      {this.escolheTela()}
      </div>
     
    )
  }
}
