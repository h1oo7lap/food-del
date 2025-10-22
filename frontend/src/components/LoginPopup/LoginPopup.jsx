import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currSate, setCurrSate] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currSate}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currSate === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <button>{currSate === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>I agree to the terms & conditions</p>
                </div>
                {currSate === "Login"
                    ? <p>Create a new account? <span onClick={()=> setCurrSate("Sign Up")}>Click here</span></p>
                    : <p>Allready have an account? <span onClick={()=> setCurrSate("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup