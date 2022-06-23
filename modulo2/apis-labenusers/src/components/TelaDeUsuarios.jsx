import React from "react";
import axios from "axios";
import styled from "styled-components";


const ListUser = styled.div`
   border: 1px solid black;
   padding: 10px;
   margin: 10px;
   display: flex;
   justify-content: space-between;
   box-shadow: 0 1px 5px 1px black;
   border-radius: 5px;
   background: #98a4a662;
   
   `
   const Container = styled.div`
   border: 1px solid black;
   background-color: lavender;
   width: 40%;
   text-align: center;
   `

   const Botao = styled.button`
   border-radius: 5px;
   padding: 3px;
   cursor: pointer;
   `
   const BotaoDel = styled.button`
   background: #f47575;
   box-shadow: 0 0 6px 1px black;
   cursor: pointer;
   
   `


export default class TelaDeUsuario extends React.Component{
    state = {
        usuario: []
    }
    componentDidMount(){
        this.pegarUsuarios()
    }

  pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization:"peterson-maia-freire"
            }
        })
        
        .then ((res) => {
           
            this.setState({usuario: res.data})
        })

        .catch((err) => {
            alert ("Ocorreu um problema!")
        })

    }
    deletarUsuario = (id)=>{
        const url =  `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {headers:{
            Authorization: "peterson-maia-freire"
        }
        })
        .then((res)=>{
            alert("Usuario deletado!")
            this.pegarUsuarios()

        })
        .catch((err)=>{
            alert("Erro")

        })

    }

render(){
       
    const listaUsuario = this.state.usuario.map((user)=>{
        return <ListUser key={user.id}>
            {user.name}
            <BotaoDel onClick={()=>this.deletarUsuario(user.id)}>Del</BotaoDel>

            </ListUser>

    })
    

    return(
    <Container>
        <h1>Usuarios cadastrados</h1>
        <Botao onClick={this.props.irParaCadastro}>Ir para cadastro</Botao>
        {listaUsuario}
    </Container>


  )
}
}