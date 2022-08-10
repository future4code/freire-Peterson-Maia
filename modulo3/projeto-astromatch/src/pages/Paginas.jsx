import Matches from "./Matches";
import Profile from "./Profile";
import {useState} from "react";
import styled from "styled-components";
import {HiOutlineFire } from "react-icons/hi";
import {ImBubbles } from "react-icons/im";


const Main = styled.main `
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: linear-gradient(to bottom, #1799a0, #144db0,  #115253);
    color: white;
    width: 300px;
    margin: auto;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`

const HiOutline = styled.h1`
margin: 10px 0 0 80%;


`

const Bubbles = styled.h1`
margin: -12% 80% 0 0;
`

export default function Paginas (){

    const [pagina, setPaginas ] = useState('perfil')

    
    const paginaAtual = () => {
        if(pagina === "perfil"){
            return <Profile />
        } else if (pagina === "matches"){
            return <Matches />
        } else {
            return < Profile />
        }

    }

    const irParaProfile =() => {  //  atualizando  o estado pagina para perfil
        setPaginas("perfil")
    }

    const irParaMatches =() => {  // atualizando o estado pagina para matches
        setPaginas("matches")
    }

    return(
        <>
            <Main>
         
            <HiOutline> <ImBubbles onClick={irParaMatches}/></HiOutline> 
            <Bubbles><HiOutlineFire onClick={irParaProfile}/></Bubbles>
    
                {paginaAtual()}
            </Main>
 
        </>
    );
};