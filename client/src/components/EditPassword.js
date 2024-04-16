import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import useReceiverData from './getReceiverDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditPassword() {

    const receiverId = '661b598a8c78249bbff30c0b'; // Specify the receiver ID
    const { receiverDetails, error } = useReceiverData(receiverId);

    const [newPassword, setNewPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Check if the new password and re-entered password match
        if (newPassword !== reenterPassword) {
            toast.error('Passwords do not match. Please try again.');
            return; // Prevent form submission and updating the profile
        }

        // Create an updated receiver object
        const updatedReceiver = {
            password: newPassword // Include the new password
        };

        try {
            // Send a PUT request to update the receiver data
            const response = await axios.put(`http://localhost:8070/receiver/update/${receiverId}`, updatedReceiver);
            
            // Show a success notification
            toast.success('Profile updated successfully!');
        } catch (err) {
            // Show an error notification
            toast.error('Failed to update profile.');
        }
    };

  return (
    <div className='flex justify-center items-center p-12 py-18 border-none w-auto mx-9 rounded-md my-16 shadow-lg h-auto'>
    <div className='edit-profile-container w-full'>
    <div className='relative'>
        <h1 className='text-2xl font-bold my-5 ml-3'> Change Password <span className='profile-underline'></span></h1>
    </div>
    <form onSubmit={handleSubmit} >
    <div className='grid grid-cols-2 gap-6 p-3 mx-3'>
      <div>
        <label className='text-xl'>Password</label><br/>
        <input type="password"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder={receiverDetails.password}  className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md' required/>
      </div>
      <div>
        <label className='text-xl'>Re-enter Password</label><br/>
        <input type="password"  value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)}className='p-2 rounded-md border border-green-200 mt-1 w-72 shadow-md'required/>
      </div>
    </div>
    <div className='flex justify-center mr-16'>
      <button type='submit' className='w-72 mt-8 p-2 bg-green-500 text-xl font-medium rounded-md hover:w-44 duration-500 ease-in shadow-md'>Submit</button>
    </div>
    </form>
      </div>
      <ToastContainer
        position="bottom-right"  
        autoClose={5000}  
        hideProgressBar={false}  
        newestOnTop={false} 
        closeOnClick={true}  
        pauseOnHover={true}  
        draggable={true} 
        pauseOnFocusLoss={true}  
        theme="light" 
      />
  </div>

  )
}
