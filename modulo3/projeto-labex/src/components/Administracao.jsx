import Header from "./Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../rotas/coordinator"
import TripCard from "./TripCard"
import { createTrip, deleteTrip } from "../acesso/requests"
import useRequestData from "../acesso/useRequestData"
import actualDate from "../acesso/actualDate"
import { planets } from "../constants/planetas"
import useForm from "../acesso/tripForm"
import styled from "styled-components"


const Section = styled.section`
    color:white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    text-align: center;
    background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
  

    input{
        height: 35px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin: 6px;
        width: 185px;
    }
    select, option{
        height: 38px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin:8px;
    }

    
    button{
      text-align: center;
      background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
      color: #000000;
      height: 40px;
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
        color: white;
    }
  }
 
  @media (max-width:900px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        h1{
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
       
        
    }

   `
const Div = styled.div`
   background-image: linear-gradient(to right, #21213d, #17c8ce, #17c8ce,  #21213d   );
   border: 1px solid black;
   text-align: center;
   border-radius: 10px;

   h2 {
    background-image: linear-gradient(to right, #070741, #10bee9, #10bee9,  #06064c   );
    border: 1px solid black;
    margin: 0;
    padding: 20px;
    background-color: #200a98;
    border-radius: 10px;
    box-shadow: 0 0 6px 1px ;

   }

   `


//Pagina do Adm
export default function Admin() {
  const navigate = useNavigate()

  const [tripsData, getTripsData] = useRequestData("trips", {})

  const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      goToHome(navigate)
    }
  }, [])

  const onClickCreate = (e) => {
    e.preventDefault();


    createTrip(form, clear, getTripsData)
  }

  const removeTrip = (tripId) => {
    if (window.confirm("Tem certeza que deseja remover esta viagem?")) {
      deleteTrip(tripId, getTripsData)
    }
  }

  const tripsList = tripsData.trips ? tripsData.trips.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        trip={trip}
        removeTrip={removeTrip}
      />
    )
  }) : (<p>Carregando...</p>)

  return (
    <>
      <Header />

      <main>
        <Section>
          <h2>Crie uma nova Viagem</h2>

          <form onSubmit={onClickCreate}>
            <label htmlFor={"name"}>{/* Nome: */}</label>
            <input
              placeholder="Digite seu Nome:"
              id={"name"}
              name={"name"}
              value={form.name}
              onChange={onChange}

            />
            <label htmlFor={"planet"}></label>
            <select
              placeholder="Planeta:"
              name={"planet"}
              id={"planet"}
              defaultValue={""}
              onChange={onChange}
              required
            >
              <option value={""} disabled>Escolha um Planeta...</option>

              {planets.map((planet) => {
                return <option value={planet} key={planet}>{planet}</option>
              })}
            </select>

            <label htmlFor={"date"}>{/* Data de Lançamento: */}</label>
            <input
              placeholder="Data de lançamento:"
              id={"date"}
              type={"date"}
              name={"date"}
              value={form.date}
              onChange={onChange}
              min={actualDate()}
              required
            />

            <label htmlFor={"description"}> {/* Descrição: */} </label>
            <input
              placeholder="Descrição:"
              id={"description"}
              name={"description"}
              value={form.description}
              onChange={onChange}
              pattern={"^.{20,}$"}
              title={"O nome deve ter no mínimo 20 caracteres"}
              required
            />
            <label htmlFor={"duration"}> Duração &#40;em dias&#41;: </label>
            <input
              id={"duration"}
              type={"number"}
              name={"durationInDays"}
              value={form.durationInDays}
              onChange={onChange}
              min={30}
              required
            />
            <br />
            <button type={"submit"}>Criar</button>
          </form>

        </Section>
        <hr />

           <Div>
          <h2>Lista de Viagens</h2>
           {tripsList}
           </Div>
        

      </main>
    </>

  )
}
