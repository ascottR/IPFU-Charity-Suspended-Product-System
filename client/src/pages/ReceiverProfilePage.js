import React from 'react'
import ProfileSideNavbar from '../components/ProfileSideNavbar'
import ReceiverEditProfileForm from '../components/ReceiverEditProfileForm'
import '../assets/css/ReceiverCSS.css'


export default function ReceiverProfilePage() {
  return (
      <div>
        <section className='grid grid-cols-12 w-full'>
          <div className='col-span-3'>
            <ProfileSideNavbar/>
          </div>
          <div className='col-span-9 bg-slate-50'>
            <ReceiverEditProfileForm/>
          </div>
        </section>
    </div>
  )
}
