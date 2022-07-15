import React from "react"
import { useNavigate } from "react-router-dom";
import { goToVoltar, goToForm } from "../rotas/cordenator";


export default function ListTripPage(){

    const navigate = useNavigate()


    return(
        <div>

        <button onClick={()=>goToVoltar(navigate)}>Voltar</button>
        <button onClick={()=>goToForm(navigate)}>Inscrever-se</button>

        <h1>Lista de Viagens</h1>
        </div>
    )

}