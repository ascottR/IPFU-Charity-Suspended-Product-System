import React from 'react'
import ProfileSideNavbar from '../components/ProfileSideNavbar'
import '../assets/css/ReceiverCSS.css'
import { Outlet } from 'react-router-dom'


export default function ReceiverProfilePage() {
  return (
      <div>
        <section className='grid grid-cols-12 w-full'>
          <div className='col-span-3'>
            <ProfileSideNavbar/>
          </div>
          <div className='col-span-9 bg-slate-50 profile-background'>
           <Outlet/>
          </div>
        </section>
    </div>
  )
}
