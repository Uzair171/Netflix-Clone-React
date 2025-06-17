import React, { useState } from 'react'
import  './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState,setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ?<input type="text" placeholder='Enter your Name'/>:<></> }         
          <input type="email" placeholder='Enter your Email'/>
          <input type="password" placeholder='Enter your Password'/>
          <button className='sign-button'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              
              <input type="checkbox" /><label>Remeber me</label>
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
