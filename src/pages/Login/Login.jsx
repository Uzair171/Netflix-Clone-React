import  { useState } from 'react'
import  './Login.css'
import logo from '../../assets/logo.png'
import {signIn,signUp} from '../../firebase.js'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState,setSignState] = useState("Sign In")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  
  const user_auth = async (e)=>{
    e.preventDefault();
    setLoading(true)
    if(signState === "Sign In"){
      await signIn(email,password)
      
    }else{
      await signUp(name,email,password)
      
    }
    setLoading(false)
  }

  




  return (
  loading ? <div className='spinner'>
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="{}">
          {signState === "Sign Up" ?<input  value={name} onChange = {(e)=>setName(e.currentTarget.value)}  type="text" placeholder='Enter your Name'/>:<></> }         
          <input value={email} onChange = {(e)=>setEmail(e.currentTarget.value)} type="email" placeholder='Enter your Email'/>
          <input value={password} onChange = {(e)=>setPassword(e.currentTarget.value)} type="password" placeholder='Enter your Password'/>
          <button className='sign-button' onClick={user_auth}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              
              {/* <input type="checkbox" /><label>Remeber me</label> */}
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"? <p>New to Netflix? <span onClick={()=>(setSignState("Sign Up"))}>Sign Up Now</span></p>:
          <p>Already have account? <span onClick={()=>(setSignState("Sign In"))}>Sign In Now</span></p>}
          
        </div>
      </div>

      
    </div>
  )
}

export default Login
