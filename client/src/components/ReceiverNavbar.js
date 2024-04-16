import React from 'react'
import { useState } from 'react';
import logo from '../assets/img/logo.svg'
import { NavLink } from 'react-router-dom';


 
const Navbar = () => {
let Links =[
    {name:"HOME",links:"/"},
    {name:"PRODUCTS",links:"/"},
    {name:"ABOUT",links:"/"},
    {name:"CONTACT",links:"/"},
    {name:"PROFILE",links:"/receiverprofile/myProfile"},
    {name:"NOTIFICATIONS",links:"/"},
];
let[open,setOpen] = useState(false);
return(

    <div className='shadow-md sticky top-0 left-0 z-50'>
        <div className='md:flex py-6 md:px-10 bg-green-500 justify-between z-50'>
        <div className='flex items-center ml-4 cursor-pointer'>
        <img src={logo} alt="logo"/>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
         <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
            <div>
                <ul className={`md:flex md:items-center left-0 w-full justify-between md:w-auto transition-all duration-400 ease-in absolute md:static md:pb-0 pb-10 md:pl-0 pl-9 text-black ${open ?'top-14 opacity-100':'top-[-490px] md:opacity-100 opacity-0'} md:z-auto z-50 bg-green-500 `}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 md:my-0 my-5'>
                            <a  href={link.links} className=' hover:text-white duration-500 font-bold'>{link.name}</a>
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    </div>
)
}

export default Navbar
