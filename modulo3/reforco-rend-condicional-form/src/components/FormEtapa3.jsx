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
select{
    display: block;
    margin: 0 0 20px 30px;
    padding: 5px 10px;
    width: 100%;
    text-align: center;
} 

`

export default function FormEtapa3() {

    const navigate = useNavigate()

const goToEtapaFinal = ()=> {
    navigate("/pagfinal")
}

    return (

        <>
            
            <FormContainer>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <label htmlFor="">5. Qual curso?</label>
                <input type="text" />

                <label htmlFor="">5. Qual curso?</label>
                <input type="text" />

                <select name="" id="">
                    <option value="">
                        nunhum
                    </option>
                    <option value="">
                        Curso tecnico
                    </option>
                    <option value="">
                        Curso ingles
                    </option>


                </select>

                <button onClick={goToEtapaFinal}>Proxima etapa</button>

            </FormContainer>

        </>



    )

}