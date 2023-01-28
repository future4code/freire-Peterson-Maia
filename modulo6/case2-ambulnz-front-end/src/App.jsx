import { DivHome, DivFooter, DivHeader, Container, ImgSty } from "./styled";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Body from "./components/Home/Constants";
import PizzaPedaco from "./components/Card/img/pizzaHeader.jpg"
import { useState } from "react";





function App() {


  const [cart, setCart] = useState([])

  const addToCart = (pizzaToAdd) => {
    const pizzaFound = cart.findIndex((pizzaInCart) => pizzaInCart.name === pizzaToAdd.name)

    if (pizzaFound >= 0) {
      const newCart = [...cart]
      newCart[pizzaFound].quantity += 1

      setCart(newCart)


    } else {
      const newCart = [...cart]
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        quantity: 1
      }
      newCart.push(newPizza)

      setCart(newPizza)
    }

  }

  return (
    <Container>

      <div style={{ backgroundImage: `url(${PizzaPedaco})`, backgroundSize: "contain", backgroundRepeat:'no-repeat' }} >
        <DivHeader >
          <Header />
        </DivHeader>
      </div>

      <DivHome  >
        <Body addToCart={addToCart} />
      </DivHome>


      <DivFooter>
        <Footer />
      </DivFooter>

    </Container>


  );
}
export default App;

