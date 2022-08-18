import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
width: 400px; 
height: 150px; 
left: 50%; 
margin: -400px 0 0 -210px; 
padding:10px;
position: absolute; 
top: 50%; 
text-align: center;



label{
    display:block;
    font-size: 20px;
}
input{
    display: block;
    margin: 0 0 20px;
    padding: 10px 25px;
    width: 100%;
}
button{
    display: block;
    margin: 0 0 0 30px;
    padding: 8px 20px;
    width: 100%;

}

`


export default function FormEtapa2() {
    const navigate = useNavigate()

const goToEtapa3 = ()=> {
    navigate("/pag3")
}

    return (
        <>

           
            <FormContainer>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <label htmlFor="">5. Qual curso?</label>
                <input type="text" />

                <label htmlFor="">5. Qual curso?</label>
                <input type="text" />

                <button onClick={goToEtapa3}>Proxima etapa</button>
            </FormContainer>

        </>




    )
}