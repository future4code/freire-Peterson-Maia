import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu1-1.fna.fbcdn.net/v/t39.30808-6/241856051_4212988855481495_4532375079890331743_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFgp5OXkD1T7DLMv1PX49mjdME7g5WNbit0wTuDlY1uK7P7i2mfx7QuT2qMNUK1hzrg3HbPah6HWaxcKiF3xYu7&_nc_ohc=WqGO6Ir2U2sAX-QZAH9&_nc_ht=scontent.fsdu1-1.fna&oh=00_AT-Af63LXfAVUUTcnzHN5k6bqddY6XHReRWlyHzRa0C3NQ&oe=62A57E28" 
          nome="Peterson Santana Maia" 
          descricao="Oi, eu sou Peterson Maia. Sou o  aluno da Labenu. ."
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=1662595200&v=beta&t=yZi7DzehYfsmm6llScA8Z-JE2vRpm9169tDawNkEWo8" 
          nome="Labenu"
          descricao="Estudante da labenu!" 
        />
        
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLRb1ugnpZU9Cb2wF07qqiwvVQ6ZJTfMxkrVXPUMh_A=s900-c-k-c0x00ffffff-no-rj" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"
        />        
      </div>
    </div>
  );
}

export default App;
