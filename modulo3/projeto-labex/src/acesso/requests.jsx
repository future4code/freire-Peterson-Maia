import { goToAdmin } from "../rotas/coordinator"
import { URL_BASE } from "./ApiUrl";
import { API_USER } from "./ApiUrl";
import axios from "axios"



export const requestLogin = (email, password, navigate) => {
    console.log(email,password);
    const body ={
        email: email,
        password: password
        
    }

    axios
    .post(`${URL_BASE}/${API_USER}/login`, body)
    .then((response) => {
        localStorage.setItem("token",response.data.token)
        alert("Login realizado com sucesso!")
        goToAdmin(navigate)
    })
    .catch((error) => {
        
        alert(error.message)

    })
}

export const sendApplication = (body, tripId, clear) => {
    axios.post(`${URL_BASE}/${API_USER}/trips/${tripId}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!");

            clear();
        })
        .catch((err) => alert(err.response.message))
}


export const createTrip = (body, clear, getTripsData) =>{
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }

    axios
    .post(`${URL_BASE}/${API_USER}/trips`, body, header)
    .then(() => {
        alert("Viagem criada com sucesso!")
        clear()
        getTripsData()
    })
    .catch((err) =>{
        alert(err.message)
    })

}

export const decideCandidate = (tripId, candidateId, decision, getTripsDetail) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    };

    const body = {
        approve: decision
    };

    axios.put(`${URL_BASE}/${API_USER}/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        header
    )
        .then(() => {
         
            decision ?
            alert("Candidato aceito na viagem!")
            : alert("Candidatura reprovada com sucesso!");

            getTripsDetail();
        })
        .catch((err) => {
            alert(err.message);
        });
};




export const deleteTrip = (tripId, getTripsData) => {
    const header = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
    .delete(`${URL_BASE}/${API_USER}/trips/${tripId}`,header)
    .then(() => {
        alert("Viagem removida com sucesso!")
        getTripsData()
    })
    .catch((err) => {
        alert(err.message)
    })
}