import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditRequestForm from "./EditRequestForm";
import Axios from "axios";

const EditRequest = () => {
    const location = useLocation();
    const { Name,email,Request } = location.state || {};
    const navigate = useNavigate();
    const selectedItem = {  Name, email,Request };

    const updateRequest = (data) => {
        const payload = {
            
            Name: data.Name,
            email: data.email,
            Request: data.Request,

        }

        Axios.post('http://localhost:3001/api/updaterequest', payload)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    return (
        
            <EditRequestForm
                updateRequest={updateRequest}
                data={selectedItem}
            />
        
    );
};

export default EditRequest;
