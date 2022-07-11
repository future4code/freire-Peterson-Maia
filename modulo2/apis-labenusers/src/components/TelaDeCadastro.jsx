import axios from "axios";
import React from "react";
import styled from "styled-components";


const ListUser = styled.div`
   display: block;
   border: 1px solid black;
   padding: 10px;
   margin: 10px;
   width: 25vw;
   height: 25vh;
   background-color: lavender ;
   text-align: center;
  
   
  
   
`
const InputStylo = styled.input`
  border-radius: 8px;
  box-shadow: 1px 1px 5px 1px ;
  margin-bottom: 20px;
  padding: 3px;
  
  
`
const Text = styled.button`
box-shadow: 4px 4px 10px 0px black;
border-radius: 6px;
margin: 10px;
padding: 2px;
cursor: pointer;
`
const InputCenter = styled.div`
text-align: center;
`


export default class TelaDeCadastro extends React.Component{
    state = {
        nome:"",
        email:""
    }
    handleNome = (event) =>{
        this.setState({nome: event.target.value})
    }
    handleEmail = (event) =>{
        this.setState({email: event.target.value})
    }

Cadastrar = () =>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
        name: this.state.nome,
        email: this.state.email
    }
    
    axios.post(url, body, {
        headers:{Authorization:"peterson-maia-freire"}
    })

    .then((res) => {
        alert("Usuário(a) cadastrado(a) com sucesso!")
        this.setState({nome: "", email: "" })

    })

    .catch((err) => {
        alert(err.response.data.message)
        this.setState({nome: "", email: "" })
    })
}
    


    render(){
        return(
            <ListUser>
                <h1>Cadastro</h1>
                <InputCenter>
                <InputStylo 
                placeholder="Nome" 
                value={this.state.nome} 
                onChange={this.handleNome} 
                />
                </InputCenter>

                <InputCenter>
                <InputStylo 
                placeholder="Email" 
                value={this.state.email} 
                onChange={this.handleEmail}
                 />
                 </InputCenter>
    
                
                <Text onClick={this.Cadastrar}>Cadastrar</Text>
                <Text onClick={this.props.irParaLista}>Ir para lista</Text>

                </ListUser>
        )

    }
}
