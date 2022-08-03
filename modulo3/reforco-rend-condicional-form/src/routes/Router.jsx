import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormEtapa2 from "../components/FormEtapa2"
import  FormEtapa3  from "../components/FormEtapa3";
import  FormEtapaFinal  from "../components/FormEtapaFinal";
import FormInicio from "../components/FormInicio";


export const Router = () => {
return(
    <BrowserRouter>
        <Routes>
        <Route index element={<FormInicio />} />
            <Route path="pag2" element={<FormEtapa2 />} />
            <Route path="pag3" element={<FormEtapa3 />} />
            <Route path="pagfinal" element={<FormEtapaFinal />} />

        </Routes> 

    </BrowserRouter>
)
}