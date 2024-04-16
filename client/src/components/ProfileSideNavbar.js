import React from 'react';
import profileImage from '../assets/img/profileImage.jpg';
import {motion} from 'framer-motion'; 
import {NavLink } from 'react-router-dom';


const ProfileSideNavbar = () => {
  let Links =[
    {name:" My Profile",links:"myProfile"},
    {name:"Edit profile",links:"editProfile"},
    {name:"Password",links:"editPassword"},
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
            <NavLink to={link.links} className={({isActive})=>{
              return ('text-xl border-none rounded-md duration-500 px-14 py-2 shadow-md' +
              (isActive ? ' bg-green-500':'hover:bg-green-500 bg-green-100'));
            }}>{link.name}</NavLink>
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
