import React from 'react'
import {motion} from 'framer-motion';

export default function LoginForm() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='login-wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className='login-input-box'>
            <input type="text" placeholder='Username' required />
            <span className='icon'><ion-icon name="person-circle-outline"></ion-icon></span>
          </div>
          <div className='login-input-box'>
            <input type="text" placeholder='Password' required/>
            <span className='icon'>
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
          </div>
          <div className='remember-forget'>
           <label><input type="checkbox" />Remember me</label>
           <a href="#">Forgot password?</a>
          </div>
          <motion.button whileHover={{scale:1.1}} transition={{duration:0.5}}  type='submit'>Login</motion.button>
          <div className="sign-up-link">
           <p>Don't have an account? <a href="#">Sign-up</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}
