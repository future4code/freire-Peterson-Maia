import React from "react"
import { useNavigate } from "react-router-dom";


export default function ListTripPage(){

    const navigate = useNavigate()

    const goToVoltar = () =>{
        navigate('/')
    }
  
    const goToForm = ()=>{
        navigate('/Form')

    }


    return(
        <div>

        <button onClick={goToVoltar}>Voltar</button>
        <button onClick={goToForm}>Inscrever-se</button>

        <h1>Lista de Viagens</h1>
        </div>
    )

}