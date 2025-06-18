import React, { useEffect } from "react"
import Home from  "./pages/Home/Home.jsx"
import { Routes,Route, Navigate, useNavigate } from "react-router-dom"
import Login from "./pages/Login/Login.jsx"
import Player from "./pages/Player/Player.jsx"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase.js"
import { ToastContainer, toast } from 'react-toastify';




export default function App(){


  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        navigate('/')
      }else{
        navigate('/login')
      }
    })
  },[])
  


  return(
    <>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/player/:id" element={ <Player/>}/>
     
      </Routes>
    </>
  )
}