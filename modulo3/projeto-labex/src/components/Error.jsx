import {useNavigate} from "react-router-dom"
import {goToHome} from "../rotas/coordinator"


//pagina de erro
export default function Error (){
    const navigate = useNavigate()

    return(
        <>
            <h2>Error 400 - Página não encontrada!</h2>
            <button onClick={() => goToHome(navigate)}>Voltar para página de inicio</button>
        </>
    )
}
