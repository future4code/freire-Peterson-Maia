import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={"Peterson"}
        fotoUsuario={"https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM"}
        fotoPost={"https://picsum.photos/200/150"}
      />
            <Post
        nomeUsuario={"Maria"}
        fotoUsuario={"https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM"}
        fotoPost={"https://picsum.photos/200/150"}
      />
            <Post
        nomeUsuario={"Marcio"}
        fotoUsuario={"https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM"}
        fotoPost={"https://picsum.photos/200/150"}
      />
    </MainContainer>
  );
}

export default App;
