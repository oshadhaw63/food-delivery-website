import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = (props) => {
    const [currState, setCurrState] = useState("Login");
    
    console.log('LoginPopup - props:', props);
    console.log('LoginPopup - props.setShowLogin:', props.setShowLogin);
    console.log('LoginPopup - typeof props.setShowLogin:', typeof props.setShowLogin);
    
    const closePopup = () => {
        console.log('closePopup called');
        if (typeof props.setShowLogin === 'function') {
            props.setShowLogin(false);
        } else {
            console.error('setShowLogin is not a function!', props);
        }
    };

    return (
        <div className='login-popup' onClick={closePopup}>
            <form onSubmit={(e) => e.preventDefault()} className="login-popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <button type="button" className="close-btn" onClick={closePopup}>✕</button>
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" && <input type="text" placeholder="Your name" required />}
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Your password" required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    )
}

export default LoginPopup
