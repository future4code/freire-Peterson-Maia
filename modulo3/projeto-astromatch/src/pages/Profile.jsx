import {useEffect, useState} from "react"
import axios from "axios"
import { API_CLIENT, BASE_URL } from "../api/Api"
import styled from "styled-components"
import {HiOutlineX} from "react-icons/hi"
 import { HiHeart } from "react-icons/hi"



const ButtonVm = styled.h1 `
display: inline;
margin: 50px;
color: #ff0000;
margin-top: 50px;
cursor: pointer;

`

const ButtonVd = styled.h1 `
display: inline;
margin: 50px;
color: #1cbd32;
margin-top: 50px;
cursor: pointer;
   
`
const NomePerfil = styled.p`
font-size: 20px;
`

function Profile(){

    const [profile, setProfile] =useState({})

    useEffect(() => {
        getProfile()
    },[])

    const getProfile =() =>{
        const url = ` ${BASE_URL}/${API_CLIENT}/person`;

        axios
        .get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            console.log(err.message)
        })

    }

    const novoPerfil = (perfilId, curtiu ) => {
        const url = ` ${BASE_URL}/${API_CLIENT}/choose-person`

        const body = { id: perfilId,  choice: curtiu }
        axios
        .post(url,body)
            .then((res) => {
                if(body.choice && res.data.isMatch){
                    alert("Deu Match")
                }
                getProfile(res.data)
            })
            .catch((err) =>{
                console.log(err.message)
            })
    } 

    const resetProfiles = () => {
        const url = `${BASE_URL}/${API_CLIENT}/clear`;

        axios.put(url)
            .then(() => {
                alert("Perfis resetados com sucesso!");
                getProfile();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const profileCard = profile ? (
        <figure>
            <img src={profile.photo}
                 alt={profile["photo_alt"]}
                 height={"300px"}
                 width={"270px"}
            />
            <strong><NomePerfil>{profile.name}, {profile.age}</NomePerfil></strong>
            <p>{profile.bio}</p>
          <ButtonVm><HiOutlineX onClick={() => {novoPerfil(profile.id, false) }}/></ButtonVm>
          <ButtonVd><HiHeart onClick={() => {novoPerfil(profile.id, true)}}/></ButtonVd>
        </figure>
    ) : (
        <>
            <h4>Acabaram os matches! Clique em "Resetar Perfis" para reiniciar</h4>
            <button onClick={() => resetProfiles()}>Resetar Perfis</button>
        </>

    )


    return(
        <>

         <h2>AstroMatch</h2>
            {profileCard}
            
        </>
        
    )
}
export default Profile