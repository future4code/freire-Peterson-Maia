import { useNavigate } from "react-router-dom"
import { goToTripDetailsPage } from "../rotas/coordinator"
import styled from "styled-components"

const Button = styled.button `
        margin-left: 6px;
        width: 100px;
        margin-top: 1px;
        height: 29px;
        background-image: linear-gradient(to right, #266da0, #266da0 );
        border: none;
        color: #ebebf3;
        &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        color: white;
        }
`

// Renderizar os cards

export default function TripCard(props){

    const navigate = useNavigate()

    const {id, name, description, planet, durationInDays, date} = props.trip

    const token = localStorage.getItem("token")

    return(
        <>
            <p><b>Nome:</b>{name}</p>
            <p><b>Descrição:</b>{description}</p>
            <p><b>Planeta:</b>{planet}</p>
            <p><b>Duração:</b>{durationInDays}</p>
            <p><b>Data:</b>{date}</p>


            {token && (
                <>
                    <Button onClick={() => goToTripDetailsPage(navigate, id)}>Exibir detalhes</Button>
                    <Button onClick={() =>props.removeTrip(id)}>Excluir viagem</Button>
                
                </>
            )}
            <hr />
        </>
    )
}

