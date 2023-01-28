import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { StyleHeader } from "./style";


export const Header = () => {
const navigate = useNavigate();


return(
<StyleHeader >

   <h3 onClick={()=>{navigate("/")}} > Ambulnz</h3>  
   <div className="StyleCar">
    <ShoppingCartIcon onClick={ () => {navigate("/carrinho")} } />
   </div>

</StyleHeader>

)

}