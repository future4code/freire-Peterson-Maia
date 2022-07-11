import React from "react";
import './Etapa.css';

export default class Etapa2 extends React.Component{

    state={

        qualCurso:'',
        qualUnidade:''

    }

   render(){

return(
    <div>
         <h3>5. Qual o curso?</h3>
    <input 
    type="text"
    value={this.state.valorInputNome}
    onChange={this.onChangeInputNome}
    />
        <h3>5. Qual a unidade de ensino?</h3>
    <input 
    type="text"
    value={this.state.valorInputNome}
    onChange={this.onChangeInputNome}
    />
    <p> <input href='./Etapa3' type="submit" value="Proxima etapa" /> </p> 
    </div>

)

   }
}