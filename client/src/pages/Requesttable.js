import Requesttableui from "./Requesttableui";
import { useEffect, useState } from "react";
import Axios from "axios";


const Requesttable = () => {
  const [requests, setRequests] = useState([]);
  

  useEffect(() => {
    getRequests();
  }, []);

  const getRequests = () => {
    Axios.get('http://localhost:3001/api/requests')
      .then(response => {
        setRequests(response.data?.response || []);
      })
      .catch(error => {
        console.error("Error fetching reqyests:", error);
      });
    };


  return (
    <div>


      <Requesttableui rows={requests} 
     
      />
      
    </div>
  );
};

export default Requesttable;
