import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../Data/urlBase";
import PizzaCard from "../Card/PizzaCard";
import { Div } from "./styled";



export default function Body(props) {
  
  const [pizzas, setPizzas] = useState([])
   const { addToCart } = props;

  useEffect(() => {
    getPizzas()
  }, [])

  const getPizzas = () => {
    axios.get(`${BASE_URL}/pizzas`)
      .then((res) => {
        setPizzas(res.data.pizzas)
      })

      .catch((err) => {
        console.log(err)
      })

  }

  return (

    <Div>
        {pizzas.map((pizza) => {
          return (
            <PizzaCard pizza={pizza} key={pizza.name} addToCart={addToCart}  />
          )
        })}
    </Div>
  )

}
