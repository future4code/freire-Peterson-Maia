import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`

border: 1px solid black;
width: 50vw;
height: 100vh;
display: flex;
align-items: flex-end;
background-color: beige;

input{

}
p{
border: 1px solid black;
background-color: #d9d634;
margin: 10px;

}

`

export default function App() {
  const [meusPosts, setMeusPosts] = useState([])
  const [messanger, setMessenger] = useState("")
  const [user, setUser] = useState("")


  const onChangeUser = (event) => {
    setUser(event.target.value)
  }

  const onChangeMessanger = (event) => {
    setMessenger(event.target.value)

  }

  const addPosts = () => {

    const novoPost = {

      msg: messanger,
      nome: user
    }

    const novaPost = [...meusPosts, novoPost]

    setMeusPosts(novaPost)
  }

  const listaDePost = meusPosts.map((p) => {
    return (
      <p>
        {p.nome} - {p.msg}

      </p>
    )
  })


  return (
    <Container>
      <input
        value={user}
        onChange={onChangeUser}
        type="text"

      />
      <input
        value={messanger}
        onChange={onChangeMessanger}
        type="text" />

      <button onClick={addPosts} >Enviar</button>

      <div>{listaDePost}</div>
    </Container>
  );
}

