import React from 'react'
import AutoImageSlider from '../components/AutoImageSlider'
import LoginForm from '../components/LoginForm'
import '../assets/css/LoginCSS.css'


export default function LoginPage() {
  return (
    <div className='grid grid-cols-12'>
    <div className='col-span-5 login-background'>
    <LoginForm/>
    </div>

    <div className='col-span-7'>
      <AutoImageSlider/>
    </div>
    </div>
  )
}
