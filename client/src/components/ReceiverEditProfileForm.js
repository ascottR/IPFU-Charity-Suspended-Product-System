import React from 'react'

export default function ReceiverEditProfileForm() {
  return (
    <div className='flex justify-center items-center p-12 py-28 border-none w-auto mx-9 rounded-md my-16 shadow-lg h-auto'>
      <div className='edit-profile-container w-full'>
      <form action="">
      <div className='grid grid-cols-2 gap-6 p-3 mx-3'>
        <div>
          <label className='text-xl'>First Name</label><br/>
          <input type="text" placeholder='Nithil' className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'/>
        </div>
        <div>
          <label className='text-xl'>Last Name</label><br/>
          <input type="text" placeholder='Waduge' className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'/>
        </div>
        <div>
          <label className='text-xl'>Email</label><br/>
          <input type="email" placeholder='example@example.com' className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'/>
        </div>
        <div>
          <label className='text-xl'>Mobile</label><br/>
          <input type="tel" placeholder='076*******' className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'/>
        </div>
      </div>
      <div className='flex justify-center mr-16'>
        <button className='w-72 mt-8 p-2 bg-green-500 text-xl font-medium rounded-md hover:w-44 duration-500 ease-in shadow-md'>Edit Profile</button>
      </div>
      </form>
        </div>
    </div>
  )
}
