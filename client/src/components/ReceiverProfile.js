import React from 'react'
import useReceiverData from './getReceiverDetails'

export default function ReceiverProfile() {
  const receiverId = '661b598a8c78249bbff30c0b'; // Specify the receiver ID
  const { receiverDetails, error } = useReceiverData(receiverId);

  return (
    <div className='flex justify-center items-center p-12 py-18 border-none w-auto mx-9 rounded-md my-16 shadow-lg h-auto'>
      <div className='edit-profile-container w-full'>
      <div className='relative'>
          <h1 className='text-2xl font-bold my-5 ml-3'>Profile Details <span className='profile-underline'></span></h1>
      </div>
        <div className='grid grid-cols-2 gap-6 p-3 mx-3'>
        <div>

          <label className='text-xl'>First Name</label><br/>
          <p className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'>{receiverDetails.fname}</p>
        </div>
        <div>
          <label className='text-xl'>Last Name</label><br/>
          <p className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'>{receiverDetails.lname}</p>
        </div>
        <div>
          <label className='text-xl'>Email</label><br/>
          <p className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'>{receiverDetails.email}</p>
        </div>
        <div>
          <label className='text-xl'>Mobile</label><br/>
          <p className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'>{receiverDetails.phone}</p>
        </div>
      </div>
        </div>
    </div>
  )
}
