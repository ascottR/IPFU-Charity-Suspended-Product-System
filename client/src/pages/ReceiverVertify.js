import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ReceiverVertify() {

    const [formData, setFormData] = useState({
        income: '',
        financialChallenges: '',
        dependents: '',
        employmentStatus: '',
        unemploymentDuration: '',
        challengesAccessingProducts: '',
        supportReceived: '',
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the server
            const response = await axios.post('http://localhost:8070/receiver/addVertify', formData);
            
            // Handle success response
            console.log(response.data.message);
            toast.success('Request Sent successfully!');
            setIsModalVisible(true);
        } catch (error) {
            // Handle error response
            console.error('Error submitting form:', error);
            toast.err('Failed to send Request.');
        }
    };

    const handleCancel = () => {
        // Logic for canceling the request (if necessary)
        // Close the modal
        deleteEntry();
        setIsModalVisible(false);
    };

    const deleteEntry = async () => {
        try {
            // Send a DELETE request to the server
            const response = await axios.delete(`http://localhost:8070/receiver/deleteLast`);
            
            // Check the response status to confirm the deletion
            if (response.status === 200) {
                console.log('Entry deleted successfully:', response.data);
                toast.success('Request Cancelled');
                // Update the frontend state if needed
                // For example, you can remove the deleted entry from a list of data
            } else {
                console.error('Failed to delete entry:', response);
                toast.err('Failed to  Cancel Request');
            }
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    };

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100 profile-background">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg mt-5">
                <h2 className="text-2xl font-bold mb-4">Request Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="income" className="block mb-2 font-semibold">Describe your current source of income:</label>
                        <input
                            type="text"
                            id="income"
                            name="income"
                            value={formData.income}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="financialChallenges" className="block mb-2 font-semibold">Describe any financial challenges you are facing:</label>
                        <textarea
                            id="financialChallenges"
                            name="financialChallenges"
                            value={formData.financialChallenges}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dependents" className="block mb-2 font-semibold">Do you have any dependents (children, elderly, disabled) who rely on you for support?</label>
                        <input
                            type="text"
                            id="dependents"
                            name="dependents"
                            value={formData.dependents}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="employmentStatus" className="block mb-2 font-semibold">Are you currently employed?</label>
                        <select
                            id="employmentStatus"
                            name="employmentStatus"
                            value={formData.employmentStatus}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select an option</option>
                            <option value="employed">Employed</option>
                            <option value="unemployed">Unemployed</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="unemploymentDuration" className="block mb-2 font-semibold">How long have you been unemployed? (if unemployed)</label>
                        <input
                            type="text"
                            id="unemploymentDuration"
                            name="unemploymentDuration"
                            value={formData.unemploymentDuration}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="challengesAccessingProducts" className="block mb-2 font-semibold">Have you faced challenges accessing sufficient and good products?</label>
                        <input
                            type="text"
                            id="challengesAccessingProducts"
                            name="challengesAccessingProducts"
                            value={formData.challengesAccessingProducts}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="supportReceived" className="block mb-2 font-semibold">Are you receiving support from any other organizations or programs?</label>
                        <input
                            type="text"
                            id="supportReceived"
                            name="supportReceived"
                            value={formData.supportReceived}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    >
                        Send Request
                    </button>
                </form>
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
                {isModalVisible && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Pending Request...</h3>
                            <p className="mb-4">Your request is pending. Do you want to cancel the request?</p>
                            <button
                                onClick={handleCancel}
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
