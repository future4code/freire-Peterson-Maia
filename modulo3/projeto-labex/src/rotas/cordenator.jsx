import { useNavigate } from "react-router-dom"


    export const goToLoginPage = (navigate) => {
        navigate('/login')
    }

    export const goToListaPage = (navigate)=>{
        navigate('/lista')
    }

    export const goToBack = (navigate)=>{
        navigate(-1)
    }

    export const goToVoltar = (navigate) =>{
        navigate('/')
    }
  
    export const goToForm = (navigate)=>{
        navigate('/Form')

    }