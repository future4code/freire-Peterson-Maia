import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const FormStyle = styled.div`
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

export default function FormInicio() {

const navigate = useNavigate()

const goToEtapa2 = ()=> {
    navigate("/pag2")
}


    return (
        <FormStyle>
            <h1>Primeira parte</h1>

            <label htmlFor="">1. Qual seu nome?</label>
            <input type="text" />
            <label htmlFor="">2. Qual sua idade?</label>
            <input type="text" />
            <label htmlFor="">3. Qual seu Email?</label>
            <input type="text" />
            <label>4. Qual a sua escolaridade?</label>

            <select name="" id="">
                <option>
                    Ensino médio incompleto
                </option>
                <option>
                    Ensino médio completo
                </option>
                <option>
                    Ensino superior incompleto
                </option>
                <option>
                    Ensino superior completo
                </option>
            </select>
            <button onClick={goToEtapa2}>Proxima etapa</button>

        </FormStyle>

    )


}
