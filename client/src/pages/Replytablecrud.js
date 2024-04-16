import Replytablecrudui from "./Replytablecrudui";
import { useEffect, useState } from "react";
import Axios from "axios";


const Replytablecrud = () => {
  const [reply, setReplies] = useState([]);
  

  useEffect(() => {
    getReplies();
  }, []);

  const getReplies = () => {
    Axios.get('http://localhost:3001/api/replies')
        .then(response => {
            setReplies(response.data?.response || []);
        })
        .catch(error => {
            console.error("Error fetching replies:", error);
        });
};

  return (
    <div>


      <Replytablecrudui rows={reply} 
     
      />
      
    </div>
  );
};

export default Replytablecrud;
