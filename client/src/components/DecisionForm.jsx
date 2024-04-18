import React, { useState } from 'react';
import axios from 'axios';

function DecisionForm() {
    const [managerName, setManagerName] = useState('');
    const [managerId, setManagerId] = useState('');
    const [decisionTitle, setDecisionTitle] = useState('');
    const [decision, setDecision] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate manager name
        if (name === 'managerName') {
            if (/[^a-zA-Z\s-]/.test(value)) {
                return; // Don't update state if invalid characters are entered
            }
        }

        // Update state with the new value
        switch (name) {
            case 'managerName':
                setManagerName(value);
                break;
            case 'managerId':
                setManagerId(value);
                break;
            case 'decisionTitle':
                setDecisionTitle(value);
                break;
            case 'decision':
                setDecision(value);
                break;
            default:
                break;
        }
    };

    function sendData(e) {
        e.preventDefault();

        // Validate Manager ID
        if (/\d/.test(managerId) || managerId.length !== 8) {
            setError("Manager ID must be 8 characters long and must not contain numbers.");
            return;
        }

        // Validate Decision Title
        if (decisionTitle.length > 50) {
            setError("Decision Title must be at most 50 characters long.");
            return;
        }

        // Check if any field is empty
        if (!managerName || !managerId || !decisionTitle || !decision) {
            setError("Please fill in all fields.");
            return;
        }

        const newDecision = {
            m_name: managerName,
            manager_id: managerId,
            d_title: decisionTitle,
            decisions: decision
        };

        axios.post("http://localhost:3000/decision/add", newDecision)
            .then(() => {
                alert("Decision Added");
                setManagerName('');
                setManagerId('');
                setDecisionTitle('');
                setDecision('');
                setError('');
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Decisions</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <form onSubmit={sendData} className="space-y-4">
                    <div>
                        <label htmlFor="managerName" className="block text-sm font-medium text-gray-700">Manager Name</label>
                        <input type="text" id="managerName" name="managerName" placeholder='Enter Manager Name' value={managerName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="managerId" className="block text-sm font-medium text-gray-700">Manager ID</label>
                        <input type="text" id="managerId" name="managerId" placeholder='Enter Manager ID' value={managerId} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="decisionTitle" className="block text-sm font-medium text-gray-700">Decision Title</label>
                        <input type="text" id="decisionTitle" name="decisionTitle" placeholder='Enter Decision Title' value={decisionTitle}  pattern='[A-Za-z ]*' title='The Decision Title must contain letters only' onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="decision" className="block text-sm font-medium text-gray-700">Decision</label>
                        <input type="text" id="decision" name="decision" placeholder='Enter Decision' value={decision} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Add Decision</button>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default DecisionForm;
