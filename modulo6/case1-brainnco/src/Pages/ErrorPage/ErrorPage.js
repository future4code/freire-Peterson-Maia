import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../router/Coordinates'
import Erro from '../../img/Error.png'
import { DivContainer, DivText, Img } from './styled'

const ErrorPage = () => {
    const Navigate = useNavigate()

    const onClickHome = () => {
        goToHome(Navigate)
    }

    return (
        <>
            <DivContainer >
                <DivText>
                    <h1> Temos um astronauta perdido no espaço! </h1>
                    <p> Infelizmente não localizamos esta página! Retorne para a página inicial. </p>
                    <button onClick={onClickHome}> Página Inicial </button>
                </DivText>
                    <div>
                        <Img src={Erro} alt={"astronauta-do-erro"} />
                    </div>
            </DivContainer>
        </>
    )

}

export default ErrorPage