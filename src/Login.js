import React from 'react';
import './Login.css';

const Login = () => {

    const loginToApp =() => {
        
    }

    const register = ()=> {

    };
  return (
    <div className='login'>
        <img src="/linkedin-logo.png" alt='linked-in-logo'  />
        <form>
            <input placeholder='Full Name (Required if registering)' type="text" />
            <input placeholder='Profile pic URL (optional)' type="text" />
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            <button type="submit" onClick={loginToApp} >Sign In</button>
        
        </form>
        <p>Not a member? <spam className="login__register" onClick={register}>Regiter Now</spam></p>
    </div>
  )
}

export default Login