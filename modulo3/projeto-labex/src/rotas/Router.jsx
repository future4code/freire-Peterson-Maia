import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Admin from "../components/Administracao";
import Error from "../components/Error";
import TripDetailsPage from "../components/TripDetailsPage"

const Router = ()=> {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"admin/:tripId/details"} element={<TripDetailsPage />} />
                <Route path={"*"} element={<Error/>} />   
            </Routes>
        </BrowserRouter>

    )
}
export default Router