import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DecisionView() {
  // State variables
  const [decisions, setDecisions] = useState([]); // Holds decision data fetched from the backend
  const [showModal, setShowModal] = useState(false); // Determines whether the update modal is visible or hidden
  const [updatedDecision, setUpdatedDecision] = useState({ // Holds data of the decision being updated
    _id: '',
    manager_id: '',
    m_name: '',
    d_title: '',
    decisions: ''
  });
  const [searchTerm, setSearchTerm] = useState(''); // Holds the search term entered by the user

  // Fetch decision data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/decision/');
        setDecisions(response.data); // Update state with the fetched decision data
      } catch (error) {
        console.error('Error fetching decision data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to open the update modal with the data of the selected decision
  const openModal = (decision) => {
    setUpdatedDecision(decision);
    setShowModal(true);
  };

  // Function to close the update modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle changes in the update form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDecision(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to submit the updated decision data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/decision/update/${updatedDecision._id}`, updatedDecision);
      closeModal();
      alert("Decision updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error('Error updating decision data:', error);
    }
  };

  // Function to delete a decision
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this decision?")) {
      try {
        await axios.delete(`http://localhost:3000/decision/delete/${id}`);
        setDecisions(prevDecisions => prevDecisions.filter(decision => decision._id !== id));
        console.log('Decision deleted successfully.');
      } catch (error) {
        console.error('Error deleting decision:', error);
      }
    }
  };

  // Function to filter decisions by manager name
  const filteredDecisions = decisions.filter(decision => decision.m_name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Decisions</strong>
      {/* Search bar */}
      <div className="flex items-center mt-3 mb-4">
        <label htmlFor="search" className="mr-2">Search by Manager Name:</label>
        <input
          type="text"
          id="search"
          placeholder="Enter Manager Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
      {/* Decision table */}
      <div className="border-x border-gray-200 rounded-sm overflow-auto max-h-96">
        <table className="w-full text-gray-700 border-separate border border-slate-400">
          <thead>
            <tr>
              <th className='border border-slate-300 py-2'>Manager ID</th>
              <th className='border border-slate-300'>Manager Name</th>
              <th className='border border-slate-300'>Decision Title</th>
              <th className='border border-slate-300'>Decision</th>
              <th className='border border-slate-300'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDecisions.map((decision) => (
              <tr key={decision._id}>
                <td className='border border-slate-300 py-4'>{decision.manager_id}</td>
                <td className='border border-slate-300'>{decision.m_name}</td>
                <td className='border border-slate-300'>{decision.d_title}</td>
                <td className='border border-slate-300'>{decision.decisions}</td>
                <td className='border border-slate-300'>
                  <button onClick={() => openModal(decision)} type="button" className="bg-blue-300 text-white px-1 py-0.5 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Update Decision</button>
                  <button onClick={() => handleDelete(decision._id)} type="button" className=" bg-red-500 text-white px-1 py-0.5 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50">Delete Decision</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Update decision modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-md p-8 w-full">
            <h2 className="text-xl font-semibold mb-4">Update Decision</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Manager ID</label>
                <input type="text" name="manager_id" value={updatedDecision.manager_id} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Manager Name</label>
                <input type="text" name="m_name" value={updatedDecision.m_name} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Decision Title</label>
                <input type="text" name="d_title" value={updatedDecision.d_title} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Decision</label>
                <textarea name="decisions" value={updatedDecision.decisions} onChange={handleChange} className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Update</button>
                <button onClick={closeModal} type="button" className="ml-4 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DecisionView;
