import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditFeedbackForm from "./EditFeedbackForm";
import Axios from "axios";

const EditFeedback = () => {
    const location = useLocation();
    const { Name,email,Feedback } = location.state || {};
    const navigate = useNavigate();
    const selectedItem = {  Name, email,Feedback };

    const updateFeedback = (data) => {
        const payload = {
            
            Name: data.Name,
            email: data.email,
            Feedback: data.Feedback,

        }

        Axios.post('http://localhost:3001/api/updatefeedback', payload)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    return (
        
            <EditFeedbackForm
                updateFeedback={updateFeedback}
                data={selectedItem}
            />
        
    );
};

export default EditFeedback;
