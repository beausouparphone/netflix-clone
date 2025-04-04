import React from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'

export const Login = () => {
  return (
    <div className='login'>
        <img src={logo} alt=""className='login-logo' />
        <div className="login-form">
          <h1>Sign Up</h1>
          <form>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <button>Sign In</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
        </div>
    </div>
  )
}
