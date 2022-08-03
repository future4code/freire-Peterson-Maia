import React from "react";
// import CardInf from './CardInf.css'
import styled from "styled-components";

const InfConteiner = styled.div`
   

p{

   border: 1px solid black;
   display: flex;
   margin: 10px;
   height: 50px;
   width: 40vw;
  justify-content: center ;
  align-items: center;
}
`

export default function CardInformaçoes(props){
    return(
        <InfConteiner>
            <p><strong>Nome:</strong> {props.nome}</p>
            <p><strong>Email: </strong> {props.email}</p>
            <p><strong>Endereço: </strong> {props.endereco}</p>
            <p><strong>Telefone: </strong> {props.tel}</p>
        </InfConteiner>




    )




}