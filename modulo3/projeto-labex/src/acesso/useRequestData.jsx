import { useState, useEffect } from "react";
import { URL_BASE } from "./ApiUrl";
import { API_USER } from "./ApiUrl";
import axios from "axios";


const useRequestData = (path, initialState) => {
   
    const [data, setData] = useState(initialState);

    const getData = () => {

        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };

        axios.get(`${URL_BASE}/${API_USER}/${path}`, header)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };


    useEffect(() => {
        getData();
    }, [path]);

    
    return [data, getData];
};

export default useRequestData;