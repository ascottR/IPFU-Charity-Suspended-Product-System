import React from 'react'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../lib/consts/navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

function Sidebar() {
  return (
    <div className='bg-lime-300 w-60 p-5 flex flex-col text-fuchsia-500'>
        <div className='flex items-center gap-3 px-16 py-1'>
            <span className='text-fuchsia-500 text-4xl '>IPFU</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
              <SidebarLink key={item.key} item={item} /> 
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-lime-700'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                <SidebarLink key={item.key} item={item} />
            ))}
             <div className={ classNames( 'text-red-400 cursor-pointer',linkClasses)} >
            <span className='text-xl'><HiOutlineLogout/></span>
            Logout
        </div>
        </div>
        </div>
  )
}

const linkClasses ='flex items-center gap-2 font-light px-4 py-2 hover:bg-lime-400 hover:no-underline active:bg-lime-500 rounded-sm text-base'

function SidebarLink({item}) {
    const {pathname}=useLocation()
    return (
        <Link to={item.path} className={ classNames(pathname===item.path ? 'text-white': 'text-fuchsia-500',linkClasses)} >
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}

export default Sidebar