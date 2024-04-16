import React, { useState } from 'react';
import axios from 'axios';

function DecisionForm() {
    const [managerName, setManagerName] = useState('');
    const [managerId, setManagerId] = useState('');
    const [decisionTitle, setDecisionTitle] = useState('');
    const [decision, setDecision] = useState('');
    const [error, setError] = useState('');

    function sendData(e) {
        e.preventDefault();

        
        if (!managerName || !managerId || !decisionTitle || !decision) {
            setError("Please fill in all fields.");
            return;
        }

        const newDecision = {
            m_name: managerName,
            manager_id: managerId,
            d_title: decisionTitle,
            decisions: decision
        }

        axios.post("http://localhost:8070/decision/add", newDecision)
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
                        <input type="text" id="managerName" placeholder='Enter Manager Name' value={managerName} onChange={(e) => setManagerName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="managerId" className="block text-sm font-medium text-gray-700">Manager ID</label>
                        <input type="text" id="managerId" placeholder='Enter Manager ID' value={managerId} onChange={(e) => setManagerId(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="decisionTitle" className="block text-sm font-medium text-gray-700">Decision Title</label>
                        <input type="text" id="decisionTitle" placeholder='Enter Decision Title' value={decisionTitle} onChange={(e) => setDecisionTitle(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="decision" className="block text-sm font-medium text-gray-700">Decision</label>
                        <textarea id="decision" placeholder='Enter Decision' value={decision} onChange={(e) => setDecision(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
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
