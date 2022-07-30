import Header from "../components/Header"
import { useEffect , useState } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdmin } from "../rotas/coordinator"
import TripCard from "../components/TripCard"
import useRequestData from "../acesso/useRequestData"
import { countries } from "../constants/countries"
import { sendApplication } from "../acesso/requests"
import useForm from "../acesso/tripForm"
import styled from "styled-components"


const Main = styled.main `
background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin: auto;
    margin-top: 0px;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    h2{
    background-image: linear-gradient(to right, #070741, #10bee9, #10bee9,  #06064c   );
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
    background-color: #200a98;
    border-radius: 10px;
    box-shadow: 0 0 6px 1px ;
    width: 100vw;
    }
    button {
        text-align: center;
    }
`  
const Section = styled.section `
    background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
    color:white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    margin: auto;
    margin-top: -2px;
    input{
        height: 35px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin:8px;
    }
    select{
        height: 37px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin:6px;
    }
    @media (max-width:900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    
`  

const Button1 =styled.button `
    text-align: center;
    background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
    color: #0c0c35;
    height: 35px;
    width: 300px;
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #09a4cf;
        color: white;
    }
    
`
 


// Pagina Inicial
export default function Home (){
    const [tripId, setTripId] = useState("")
    const navigate = useNavigate()


    const [tripsData] = useRequestData("trips", {})

    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })


    useEffect(() =>{
        if (localStorage.getItem("token")){
            goToAdmin(navigate)
        }
    },[])

    const onChangeTrip = (event) => {
        setTripId(event.target.value);
    };

    const onClickSend = (event) => {
        event.preventDefault();

        sendApplication(form, tripId, clear);

    }
    
    const tripsOptions = tripsData.trips && tripsData.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>;
    });

    const tripsList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                trip={trip}
            />    
        )
    }) : ( <p>Carregando...</p> )


    return(
        <>
        
        <Header />

        <Section>

                        <h2>Inscreva-se numa nova viagem!</h2>
                        <form onSubmit={onClickSend}>                    
                            <label htmlFor="trip"> {/* Viagem: */} </label>
                            <select 
                                id={"trip"}
                                defaultValue={""}
                                onChange={onChangeTrip}
                                required
                            >
                                <option 
                                    value={""} 
                                    disabled
                                >Escolha uma Viagem...</option>
                
                                {tripsOptions}
                            </select>
                            <label htmlFor={"name"}>{/* Nome: */}</label>
                            <input
                                placeholder="Digite seu nome"
                                id={"name"}
                                name={"name"}
                                value={form.name}
                                onChange={onChange}
                                pattern={"^.{3,}$"}
                                title={"O nome deve ter no mínimo 3 caracteres"}
                                required
                            />
                            <label htmlFor={"age"}>{/* Idade: */}</label>
                            <input
                                placeholder="Informe a sua idade."
                                id={"age"}
                                name={"age"}
                                type={"number"}
                                value={form.age}
                                onChange={onChange}
                                min={18}
                                required
                            />
                            
                            <label htmlFor={"application-text"}>{/* Texto: */}</label>
                            <input
                                placeholder="Texto de Candidatura"
                                id={"application-text"}
                                name={"applicationText"}
                                value={form.applicationText}
                                onChange={onChange}
                                pattern={"^.{30,}$"}
                                title={"O texto deve ter no mínimo 30 caracteres"}
                                required
                            />
                            
                            <label htmlFor={"profession"}>{/* Profissão: */}</label>
                            <input
                                placeholder="Informe a sua profissão"
                                id={"profession"}
                                name={"profession"}
                                value={form.profession}
                                onChange={onChange}
                                pattern={"^.{3,}$"}
                                title={"A profissão deve ter no mínimo 3 caracteres"}
                                required
                            />
                            <label htmlFor={"country"}>{/* País de origem: */}</label>
                            <select
                                id={"country"}
                                name={"country"}
                                value={form.country}
                                onChange={onChange}
                                required
                            >
                                <option 
                                    value={""} 
                                    disabled
                                > Escolha um País... </option>
                                
                                {countries.map((country) => {
                                    return <option value={country} key={country}>{country}</option>
                                })}
                            </select>
                       {/*      <hr /> */}
                            <Button1 type={"submit"}>Enviar Candidatura</Button1>
                        </form>
                    </Section>      
            <Main>    
    
                <section>
                    <h2>Lista de Viagens</h2>
                    {tripsList} 
                </section>
            </Main>
            
        </>
    )
}
