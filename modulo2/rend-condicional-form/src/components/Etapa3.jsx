import React from "react";


export default class Etapa3 extends React.Component {

    state={
     nome:"",
     idade:"",
     email:""
     
 }

 render(){

    return(

<div>
    <h3>5. Por que você não terminou um curso de graduação</h3>
    <input 
    type="text"
    value={this.state.valorInputNome}
    onChange={this.onChangeInputNome}
     />
   <h3>5. Por que você não terminou um curso de graduação</h3>
    <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio incompleto">Ensino médio completo</option>

          </select>
        </label>
       <p> <a href="./Etapa2"><button>Proxima etapa</button></a> </p> 
       
    </form>




</div>


    )
    }
 }