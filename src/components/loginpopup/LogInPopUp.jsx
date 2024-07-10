import React, { useState } from 'react'
import "./LogInPopUp.css"
import { assets } from '../../assets/assets'

const LogInPopUp = ({setShowLogin}) => {
    const[currState, setCurrState]= useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container' action="">
            <div className="login-pop-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState ==="Login"?<></>:
                <input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='password' required />

            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>Accept</p>
            </div>
            {currState === "Login" ?
            <p>Create account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
            <p>Already Have account? <span onClick={()=>setCurrState("Login")}>Log in Here</span></p>}
        </form>
        
        </div>
  )
}

export default LogInPopUp