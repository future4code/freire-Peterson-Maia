import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goToBack } from "../rotas/cordenator";


export default function LoginPage() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const onChangeSetEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSetPassword = (event) => {
        setPassword(event.target.value)
    }

    const submitLogin = () => {
        console.log( email, password);

        const autentication = {
            email: email,
            password: password
        }

        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', autentication)
            .then((response) => {
                alert("Logado com Secesso", response.data.token)
                localStorage.setItem('token', response.data.token)
            })

            .catch((error) => {
                alert('Erro de requisição', error.response)
            })
    }


    return (
        <div>

            <h1>Faca seu login</h1>

            <input
                placeholder="E-mail"
                type="text"
                value={email}
                onChange={onChangeSetEmail}

            />

            <input
                placeholder="Senha"
                type="text"
                value={password}
                onChange={onChangeSetPassword}
            />

            <button onClick={submitLogin}>Logar</button>
            <button onClick={()=>goToBack(navigate)}>Voltar</button>
        </div>

    )
}