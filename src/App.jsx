import React from "react"
import Home from  "./pages/Home/Home.jsx"
import { Routes,Route } from "react-router-dom"
import Login from "./pages/Login/Login.jsx"

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
     
      </Routes>
    </>
  )
}