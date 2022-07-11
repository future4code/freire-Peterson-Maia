
import React from "react";
import './mensagem.css';



export default class Mensagem extends React.Component {
 

  state = {
    Mensagens:[ ] ,
    valorInputNome: '',
    valorInputMensagem: ''

  };
  enviarMsg = () => {
    const novaMsg = {
      nome: this.state.valorInputNome,
     mensagem: this.state.valorInputMensagem
    };
 const novoMsg = [...this.state.Mensagens, novaMsg];
    this.setState({ Mensagens: novoMsg });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

render() {
    const listaDeComponentes = this.state.Mensagens.map((enviado) => {
        return (
          <p className="env">
            <strong>{enviado.nome}</strong>: {enviado.mensagem}
          </p>
        );
      });
      
  return (
   
    <div className="msg">
        <div>{listaDeComponentes}</div>
        <div className="baixo">
      <input
      className="impN"
        type="text"
        id="nome"
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={"Nome"}
      />

      <input
      className="impM"
        type="text"
        id="mensagem"
        value={this.state.valorInputMensagem}
        onChange={this.onChangeInputMensagem}
        placeholder={"Mensagem"}
      />
      

      <button onClick={this.enviarMsg}>Enviar</button>   
      </div> 
    </div>
  
  );
}
}