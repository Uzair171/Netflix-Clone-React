import  { useEffect, useState} from "react"
import Home from  "./pages/Home/Home.jsx"
import { Routes,Route,useNavigate } from "react-router-dom"
import Login from "./pages/Login/Login.jsx"
import Player from "./pages/Player/Player.jsx"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase.js"
import { ToastContainer } from 'react-toastify';
import netflix_spinner from './assets/netflix_spinner.gif'

export default function App(){

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // user is logged in
      } else {
        navigate("/login"); // user is not logged in
      }
      setLoading(false); 
    });

    return () => unsubscribe(); // clean up
  }, []);
  
  return(
    loading ? <div className='spinner'>
      <img src={netflix_spinner} alt="" />
    </div>:<>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/" element={ <Home/>}/>
        <Route path="/player/:id" element={ <Player/>}/>
     
      </Routes>
    </>
  )
}