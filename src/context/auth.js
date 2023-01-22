import axios from 'axios';
import {React, useEffect, useState, createContext, useContext } from 'react'

const authContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    // axios Config
    axios.defaults.baseURL = process.env.REACT_APP_API;
    axios.defaults.headers.common["Authorization"] = auth?.token

    useEffect(()=>{
        const data = localStorage.getItem("auth")
        if(data){
            const parsed = JSON.parse(data)
            setAuth({...auth, user: parsed.user, token: parsed.token })
        }
    },[]);


  return (
    <authContext.Provider value={[auth, setAuth]}>
        {children}
    </authContext.Provider>
  )
}

const useAuth = ()=> useContext(authContext)

export {useAuth, AuthProvider};

