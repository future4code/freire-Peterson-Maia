import axios from "axios"
import React, { useEffect } from "react"


export default function AdminHomePage(){

useEffect(()=>{

  const token = localStorage.getItem('token')

axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`,{
   headers:{
      auth:'token'
   } 
})

.then((response)=>{
   console.log(response.data);
})

.catch((error)=>{
   console.log('Deu erro',error.response);

})

}, [])


return(
   <div>

    <button>Voltar</button>
    <button>Criar Viagem</button>
    <button>Logout</button>

   </div>

)
}