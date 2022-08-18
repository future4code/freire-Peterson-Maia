import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardInformaçoes from './components/CardInformaçoes/CardInformçaoes';
import styled from "styled-components"

const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;

  h3 {
    text-align: center;
  margin-bottom: 20px;
  }
`
const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  const nome = " Peterson Santana Maia"
  const eml = " peterson.maia20@gmail.com"
  const end = " Carmo-rj"
  const tel= " (22) 992443258"
  
  return (
    <AppContainer>
      <PageSectionContainer>
        <H2>Dados pessoais</H2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQF5FCU8ud5VuQ/profile-displayphoto-shrink_100_100/0/1624194324042?e=1664409600&v=beta&t=noDdond7XkqBquXFpv4RX96yk4GQrw8TzhO802pd3NM" 
          nome="Peterson" 
          descricao="Oi, eu sou o Peterson Santana Maia. Sou estudante de analises de sistemas da Labenu e da Estacio, trabalhava como auxiliar de engenharia em uma empresa aqui na minha cidade"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/20/20919.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <CardInformaçoes
      nome={nome}
      email={eml}
      endereco={end}
      tel={tel}
      />

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando de Analises de Sistemas" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Outro" 
          descricao="Apontando defeitos." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2>Minhas redes sociais</H2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
