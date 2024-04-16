import React, { useEffect, useState } from "react";
import Axios from "axios";
import Replytableui from "./Replytableui";

const Replytable = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    Axios.get('http://localhost:3001/api/requests') // Assuming this endpoint fetches the requests
      .then(response => {
        setRequests(response.data?.response || []);
      })
      .catch(error => {
        console.error("Error fetching requests:", error);
      });
  };

  const handleReply = (selectedRequest) => {
    // Handle replying to the selected request, you can implement this functionality here.
    console.log("Replying to request:", selectedRequest);
  };

  return (
    <div>
      <Replytableui rows={requests} handleReply={handleReply} />
    </div>
  );
};

export default Replytable;
