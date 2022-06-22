import React from "react";

import axios from "axios";



export default class App extends React.Component {

state = {
  usuario: [],
  inputNome: "",
  inputEmail: ""
}

onChangeInputNome = (event) =>{
this.setState ({inputNome: event.target.value})
}

onChangeInputEmail = (event) =>{
  this.setState({inputEmail: event.target.value})
}

criarNovoUsuario = (event) => {
  const body = {
    usuario: this.state.inputNome,
    email: this.state.inputEmail
  };

  const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {headers: {Authorization: "peterson-maia-freire"}}
  );

  componentDidMount = () => {
    this.getUsuario();
  };

  getUsuario = () => {
    const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", { headers: { Authorization: "peterson-maia-freire"}
      }
    );
    request
      .then((response) => {this.setState({ usuario: response.data.result.list })})
      .catch((error) => {console.log(error.message)});
  };

  request
      .then((response) => {
        console.log(response.data);
        this.getUsuario();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


render(){

  return(
    <div>
       <h1>Cadastro de usuario</h1>

       <label>Digite seu nome: </label>
       <input 
       type="text"
       placeholder="Nome"
       value={this.state.inputNome}  
       onChange={this.onChangeInputNome}
       />
       <br />
       <br />
       <label>Digite Seu email: </label>
       <input 
       type="text" 
       placeholder="E-mail"
       value={this.state.inputEmail} 
       onChange={this.onChangeInputEmail} 
       />

    <button onClick={this.criarNovoUsuario} > Confirmar cadastro </button>

    <section>
          {this.state.usuario.map((usuario) => {
            return <p key={usuario.email}>{usuario.nome}</p>;
          })}
        </section>
    </div>

    )
  }
}
