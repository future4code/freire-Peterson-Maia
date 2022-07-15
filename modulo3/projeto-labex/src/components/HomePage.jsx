import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToListaPage } from "../rotas/cordenator";
import styled from "styled-components";

const Container = styled.div`
text-align: center;
align-items: center;
display: flex;
justify-content: space-evenly;
height: 100vh;

`


export default function HomePage() {
    const navigate = useNavigate()


    return (
        <Container>
            <button onClick={()=>goToListaPage(navigate)}>Ache sua Viagem</button>
            <button onClick={()=>goToLoginPage(navigate)}>Administração</button>
        </Container>
    )
}