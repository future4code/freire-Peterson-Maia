import React from "react"
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage(){
    const navigate = useNavigate()
    
    const goToBack = ()=>{
        navigate('/lista')
    }

    
    return(
        <div>

        <form>
        <select>
            <option>Escolha uma Viagem</option>
        </select>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Idade" />
        <input type="text" placeholder="Texto de Candidatura" />
        <input type="text" placeholder="Profissão" />

        <select>
            <option>Escolha um País</option>
        </select>
        </form>

      
        <button onClick={goToBack}>Voltar</button>
        <button>Enviar</button>
        </div>

        

    )

}