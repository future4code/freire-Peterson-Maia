import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled.div`
   display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;

  
`


function App() {
  const [nomeUsuario, setNomeUsuario] = useState("")
  const [fotoUsuario, setFotoUsuario] = useState("")
  const [fotoPost, setFotoPost] = useState("")
 
  const [posts, setPosts] = useState([
   

    {
      nomeUsuario: "Peterson",
      fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "João",
      fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM",
      fotoPost: "https://picsum.photos/200/152"
    },
    {
      nomeUsuario: "Pedro",
      fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM",
      fotoPost: "https://picsum.photos/200/151"
    },
    {
      nomeUsuario: "Beto",
      fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM",
      fotoPost: "https://picsum.photos/200/154"
    }
  ])

  console.log(posts);
  const onChangeUsuario = (event) => {
    setNomeUsuario(event.target.value);
  };

  const onChangeFotoU = (event) => {
    setFotoUsuario(event.target.value);
  };

  const onChangeFotoP = (event) => {
    setFotoPost(event.target.value);
  };

  const addPost = () => {

    const novoPost = {
      nome: nomeUsuario,
      fotoU: fotoUsuario,
      fotoP: fotoPost
    }

    const novoArray = [novoPost, ...posts ]

    setPosts(novoArray)
    
  }
  

  const novaListaUsuarios = posts.map((p) => {

    return (
      <Post
        nomeUsuario={p.nomeUsuario}
        fotoUsuario={p.fotoUsuario}
        fotoPost={p.fotoPost}
      />
    )
  })


  return (

    <>
    <MainContainer>
      <FormContainer>
        <label htmlFor="">Crie seu Post: </label>

        <input
          type="text"
          placeholder="Digite seu Nome"
          value={nomeUsuario}
          onChange={onChangeUsuario}

        />

        <input
          type="text"
          placeholder="Foto de Perfiu"
          value={fotoUsuario}
          onChange={onChangeFotoU}

        />

        <input
          type="text"
          placeholder="Link da imagem"
          value={fotoPost}
          onChange={onChangeFotoP}

        />
      
        <button onClick={addPost}>Adicionar Post</button>
      </FormContainer>

      
        {novaListaUsuarios}
      </MainContainer>
    </>
  );
}

export default App;
