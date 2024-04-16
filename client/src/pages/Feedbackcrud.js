import Feedbackcrud_ui from "./Feedbackcrud_ui";
import { useEffect, useState } from "react";
import Axios from "axios";

const Feedbackcrud = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [submitted,setSubmitted] = useState(false);
  const [selectedname,setselectedname] = useState({});

  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = () => {
    Axios.get('http://localhost:3001/api/feedbacks')
      .then(response => {
        setFeedbacks(response.data?.response || []);
      })
      .catch(error => {
        console.error("Error fetching feedbacks:", error);
      });
  };

 
  return (
    <div>


      <Feedbackcrud_ui rows={feedbacks} 
     
      />
      
    </div>
  );
};

export default Feedbackcrud;
