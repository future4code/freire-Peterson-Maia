import {Route, Routes} from "react-router-dom"
import Carrinho from "../Car/Carrinho"
import Body from "../Home/Constants"
 
export const Rotas = () => {

    return(
 
<Routes>

    <Route path="/" element={ <Body />} />
    <Route path="/carrinho" element={ <Carrinho /> } />

</Routes>

    )
}

