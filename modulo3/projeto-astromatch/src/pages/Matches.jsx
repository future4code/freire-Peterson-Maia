import {useState, useEffect} from "react"
import axios from "axios"
import { API_CLIENT, BASE_URL } from "../api/Api"
import styled from "styled-components"

const Figure = styled.figure`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px;
    background-color: #3871cc;
    margin: 5px;

`


function Matches (){

    const [matches, setMatches] = useState(undefined)

    useEffect(() => {
        getMatches()
    },[])

    const getMatches =() => {

        const url = `${BASE_URL}/${API_CLIENT}/matches`;

        axios
            .get(url)
            .then((res) => {
                
                setMatches(res.data.matches);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const novosMatches = matches && matches.map((match) => {
        return(
            <Figure key={match.id}>
            
                <img
                    src={match.photo}
                    alt={`foto de ${match.name}`}
                    height={"50px"}
                    width={"50px"}
                />    
                <span>{match.name}</span>
                
            </Figure>
        )
    })
    return(
       <>
            <h2>Matches</h2>
            {novosMatches}
       </>
    )
}
export default Matches
