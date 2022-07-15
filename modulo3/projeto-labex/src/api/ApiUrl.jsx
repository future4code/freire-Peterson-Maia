import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";


export const ApiLabexData = (url, initialState)=>{
    const [date, setData] = useState(initialState)

useEffect(()=>{
    axios
    .get(url)
    .then((res)=> setData(res.data))
    .catch((err)=>console.log(err))
    
}, [url])

return date
}