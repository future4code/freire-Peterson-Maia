import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormFinal = styled.div`
text-align: center;

`


export default function FormEtapaFinal() {
    const navigate = useNavigate()

const goToEtapaFinal = ()=> {
    navigate("/")
}
    return (
        
        <FormFinal>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p> Muito obrigado por participar! Entraremos em contato!</p>
            <button onClick={goToEtapaFinal}>Voltar para o Inicio</button>
        </FormFinal>



    )
}