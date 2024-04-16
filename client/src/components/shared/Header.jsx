import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Popover,Transition,Menu } from '@headlessui/react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate()

  return (
    <div className='bg-lime-300 h-16 px-4 flex justify-between items-center border-b border-lime-700'>
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute  translate-y-1/2 left-3 '/>
            <input
             type='text' 
             placeholder='Search...' 
             className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'/>
        </div>
        <div className='flex item-center gap-2 mr-2'>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-lime-200' ,'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-lime-200')}>
            <HiOutlineChatAlt fontSize={24}/>  
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                  <strong className='text-gray-700 font-medium'>Messages</strong>
                  <div className='mt-2 py-1 text-sm'>This is the Message panel</div>
                  </div></Popover.Panel>
              </Transition>
            </>)}
          </Popover>
          <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(open && 'bg-lime-200' ,'p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-lime-200')}>
            <HiOutlineBell fontSize={24}/> 
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                <div className='bg-white rounded-sm shadow-md ring-black ring-opacity-5 px-2 py-2.5'>
                  <strong className='text-gray-700 font-medium'>Notifications</strong>
                  <div className='mt-2 py-1 text-sm'>This is the Notification panel</div>
                  </div></Popover.Panel>
              </Transition>
            </>)}
          </Popover>

          <Menu as="div" className="relative inline-block text-left">
        <div>
        <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2" onClick={() => navigate('/profile')}>
            <span className="sr-only">Open user menu</span>
            <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
              <span className="sr-only">Vishva Ranasinghe</span>
            </div>
        </Menu.Button>

          </div>
           </Menu>
        </div>
        </div>
  )
}

export default Header