import { useState, useEffect } from 'react';
import axios from 'axios';

function useReceiverData(receiverId) {
    const [receiverDetails, setReceiverDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8070/receiver/get/${receiverId}`);
                setReceiverDetails(response.data.receiver);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [receiverId]);

    return { receiverDetails};
}

export default useReceiverData;
