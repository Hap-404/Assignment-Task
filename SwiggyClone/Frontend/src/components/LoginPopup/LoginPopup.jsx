import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState("Sign up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick = {()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState === "Login" ? <></> : <input type="text" placeholder='Your-Name'  required />}
                <input type="email" placeholder="Your-email"  required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currentState==="Sign up" ? "Create Account" : "Login"}</button>
            <div className="login-popup-condition">
                <div className='checkbox-row'>
                <input type="checkbox" required />
                <p>
                    I Agree to the terms and conditions 
                </p>
               
                </div>
                <div className="checkbox-row">
                <input type="checkbox" required />
                <p>
                    I agree to the Privacy Policy
                </p>
                </div>
               
            </div>
            {currentState === "Login"
            ? <p>Create an acount?  <span onClick={()=>setCurrentState("Sign up")}> Click here </span> </p>
            : <p>Already have an account?  <span onClick={()=>setCurrentState("Login")}> Login now </span> </p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup