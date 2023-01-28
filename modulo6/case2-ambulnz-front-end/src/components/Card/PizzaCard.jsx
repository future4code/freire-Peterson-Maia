import { Container, StyleDescript, styleDescripty } from "./styled";
import Pizza1 from "./img/pizza1.jpeg"
import FloatingActionButtonSize from "./Buttom";
import styled from "styled-components";

const StyleButton = styled.div`

text-align: right;

`


export default function PizzaCard(props) {

    const { pizza, addToCart } = props;


    return (

        <Container >
            
            <img src={Pizza1} alt="img-pizza-sabor" width={200} height={160} style={{ borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px' }} />
        
            <div className="styleDescripty">
            <h3 className="styleNamePizza">{pizza.name}</h3>
            <h6> {`UU$ ${pizza.price.toFixed(2)}`} </h6>
            {pizza.ingredients.map((ingre) => {
                return (
                        <StyleDescript key={ingre}> {ingre} </StyleDescript>
                )
            })}
            </div>

            <StyleButton>
                <FloatingActionButtonSize addToCart={addToCart} pizza={pizza} />
            </StyleButton>

        </Container>

    )


}