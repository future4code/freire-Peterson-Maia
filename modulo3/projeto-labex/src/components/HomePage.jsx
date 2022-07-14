import React from "react";
import { useNavigate } from "react-router-dom";
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

    const goToLoginPage = () => {
        navigate('/login')
    }

    const goToListaPage = ()=>{
        navigate('/lista')
    }

    return (
        <Container>
            <button onClick={goToListaPage}>Ache sua Viagem</button>
            <button onClick={goToLoginPage}>Administração</button>
        </Container>
    )
}