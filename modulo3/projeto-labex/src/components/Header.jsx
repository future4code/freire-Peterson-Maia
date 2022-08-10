import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {  goToHome} from "../rotas/coordinator"
import { requestLogin } from "../acesso/requests"
import styled from "styled-components"

const Headers = styled.header `
  background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
    color: #010000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 35vh;
    width: 100%;
    text-align: center;
    
    h1 ,h2{
        font-size: 70px;
        height: 20px;
        margin-left: 20px;
        margin: 100px;
    }
    h1 {
        margin-top: 0px;
    }
    @media (max-width:900px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        h1{
            text-align: center;
        }
        section {
            
            text-align: center;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
        } 
    }
    
`
const Form = styled.form`
    text-align: center;
    display: flex;
    flex-direction: row;
    margin: 6vh;
    height: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    label{
        margin-top: 7px;
        margin-left: 15px;
        height: 25px;
    }
    input{
        border-radius: 5px;
        margin-left:3px;
        height: 25px;
        text-align: center;
       
    }
    button{
        margin-left: 6px;
        width: 50px;
        margin-top: 1px;
        height: 29px;
        background-color: #1485c6;
        border: none;
        color: #04041d;
        &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #000000;
        color: white;
        }
    }
    @media (max-width:650px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        section {
            text-align: center;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
            
            

        }
     
    }   
  
    
` 
const Button = styled.button `
    width: 100px;
    height: 35px;
    margin: 35px;
    background-color: #04bae7;
    border: none;
    color: #010105;
    
    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #08899a;
        color: white;
    }
    @media (max-width:900px) {
       margin: auto;
        
    }
`

export default function Header (){
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const renderizaInputs =(e) =>{  
        switch (e.target.name){
            case "email":
                return setEmail(e.target.value)
            case "password":
                return setPassword(e.target.value)   
            default:
                return
        }
    }

    const login = (e) =>{
        e.preventDefault()


        requestLogin(email, password, navigate)
    }

    const logout= () =>{
        localStorage.removeItem("token")

        goToHome(navigate)
    }

  

    const renderizarPaginas =
        localStorage.getItem("token") ?
        (
            <Button onClick={logout}>Logout</Button>
        ) : (
            <Form className="img" onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>
                <input
                placeholder="Digite seu Email"
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={renderizaInputs}
                 />   
            <br />
                <label htmlFor={"password"}>Senha:</label>
                    <input 
                        placeholder="Digite sua senha:"
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={renderizaInputs}
                    />
                    <br />
                    <button type={"submit"}>Entrar</button>
            </Form>
        )
 
    return(
        <Headers>
            <h1>Labex</h1>
           
           {renderizarPaginas}

        </Headers>
    )
}
