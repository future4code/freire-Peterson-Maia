import React from 'react';
import './Etapa.css';

export default class Etapa1 extends React.Component{



   state={
    nome:"",
    idade:"",
    email:""
    
} 

render(){

    return(

        <div className='Inp'>
             <h1>Prencha o formulario</h1>
        <h3>1. Qual seu Nome?</h3>
        
     <input
      className="impN"
        type="text"
        id="nome"
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={""}
        />
        
        <h3>2. Qual sua idade?</h3>

        <input
      className="impN"
        type="text"
        id="nome"
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={""}
        />

        <h3>2. Qual seu email?</h3>

         <input
      className="impN"
        type="text"
        id="nome"
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        placeholder={""}
        />
        <h3>4. Qual a sua escolaridade</h3>
        <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio incompleto">Ensino médio completo</option>
            <option value="Ensino médio incompleto">Ensino superio incompleto</option>
            <option value="Ensino médio incompleto">Ensino superio completo</option>
          </select>
        </label>
       <p> <input href='' type="submit" value="Proxima etapa" /> </p> 

      </form>


        </div>
    )
 }

}