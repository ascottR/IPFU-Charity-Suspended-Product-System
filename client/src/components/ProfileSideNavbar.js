import React from 'react';
import profileImage from '../assets/img/profileImage.jpg';
import {motion} from 'framer-motion'; 


const ProfileSideNavbar = () => {
  let Links =[
    {name:"Edit profile",links:"/"},
    {name:"Password",links:"/"},
    {name:"Log out",links:"/"},
  ];

  return (
    <motion.div
    initial={{opacity:0 , x:-600}}
    animate ={{opacity:1 , x:0}}
    transition={{duration:1.2}}
     className='flex flex-col justify-between shadow-md'>

  <div className='bg-green-200 h-screen left-0 top-9 w-full '>
  
  <div className='my-4'>
      <img src={profileImage} alt="ProfileImage" class="profile-image"/>
  </div>
  
  <div className='flex flex-col items-center'>
    <h1 className='my-2 text-2xl font-bold'>Nithil Waduge</h1>
  <div>
  
    <ul className='flex flex-col justify-between items-center mt-4'>
      {
        Links.map((link)=>(
          <li key={link.name} className='my-3 hover:scale-110 duration-500'>
            <a href={link.links} className='hover:bg-green-500 bg-green-100 text-xl border-none rounded-md duration-500 px-14 py-2 shadow-md'>{link.name}</a>
          </li>
        ))
      }
    </ul>
  </div>
  </div>
  </div>
 
</motion.div>

  )
}

export default ProfileSideNavbar
