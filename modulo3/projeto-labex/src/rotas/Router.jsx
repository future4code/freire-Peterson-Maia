import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminHomePage from '../components/AdminHomePage'
import ApplicationFormPage from '../components/ApplicationFormPage'
import HomePage from '../components/HomePage'
import ListTripPage from '../components/ListTripsPage'
import LoginPage from '../components/LoginPage'




export const Router = () =>{
return(
    <BrowserRouter>
<Routes>
     <Route index element={<HomePage/>} />
     <Route path='Home' element={<AdminHomePage/>} />
     <Route path='login' element={<LoginPage/>}/>
     <Route path='lista'element={<ListTripPage/>}/>
     <Route path='Form'element={<ApplicationFormPage/>}/>
</Routes>

   </BrowserRouter>
 )
}