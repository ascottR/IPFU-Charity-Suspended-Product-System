import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditReplyForm from "./EditReplyForm";
import Axios from "axios";

const EditReply = () => {
    const location = useLocation();
    const { Name,email,Request ,Reply} = location.state || {};
    const navigate = useNavigate();
    const selectedItem = {  Name, email,Request,Reply };

    const updateReply = (data) => {
        const payload = {
            
            Name: data.Name,
            email: data.email,
            Request: data.Request,
            Reply: data.Reply,


        }

        Axios.post('http://localhost:3001/api/updatereply', payload)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            });
    }

    return (
        
            <EditReplyForm
                updateReply={updateReply}
                data={selectedItem}
            />
        
    );
};

export default EditReply;

