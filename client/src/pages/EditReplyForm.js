import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';


const EditReplyForm = ({data}) => {

    const location = useLocation();

    const [Name, setName] = useState(location.state ? location.state.name : "");
    const [email, setemail] = useState(location.state ? location.state.email : "");
    const [Request, setRequest] = useState(location.state ? location.state.Request : "");
    const [Reply, setReply] = useState(location.state ? location.state.Reply : "");

    
      useEffect(() => {
        if (data?.Name && data.Name !== 0) {
          setName(data.Name|| "");
          setemail(data.email|| "");
          setRequest(data.Request|| "");
          setReply(data.Reply|| "");
        }
      }, [data]);
    
      const updateItem = (data) => {
        const payload = {
            Name: data.Name,
            email:data.email,
            Request:data.Request,
            Reply:data.Reply,

            
        }
    
        axios.post('http://localhost:3001/api/updatereply', payload)
        .then(response => {
          swal.fire({
            icon: "success",
            title: "Success!",
            text: "Feedback Update successfully.",
          });
          setName("");
          setemail("");
          setRequest("");
          setReply("");
          navigate('/');
        })
        .catch(error => {
          console.error("Error updating reply:", error);
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error updating reply. Please try again later.",
          });
        });
      }
      const navigate = useNavigate();
    
      const handleUpdate = () => {
        console.log('EditReplyForm - handleUpdate - name:', Name);
        console.log('EditReplyForm - handleUpdate - email:', email);
        console.log('EditReplyForm - handleUpdate - Feedback:', Request);
        console.log('EditReplyForm - handleUpdate - Feedback:', Reply);

    
        updateItem({ Name, email, Request,Reply });
        navigate('/');
      };
    

    return (
        <div className="app">
            <header className="app-bar">
                <div className="logo">IPFU</div>
                <nav className="menu-links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
  
            <div style={{ margin: '20px auto', width: '100%', maxWidth: '900px', minHeight: '500px',padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
    <form className="reply-form">
    <div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Full Name</span>
          </div>
        <input
            type="text"
            name="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', marginBottom: '10px', height: '40px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

<div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Email</span>
          </div>
        <input
            type="text"
            value={email}
            onChange={(e) => setRequest(e.target.value)}
            readOnly
            style={{ width: '100%', marginBottom: '10px', padding: '5px', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <div className="your-name-label" style={{ padding: '10px' }}>
            <span className="your-full-name" htmlFor="name"> Request</span>
          </div>
        <input
            type="text"
            value={Request}
            onChange={(e) => setRequest(e.target.value)}
            readOnly
            style={{ width: '100%', marginBottom: '10px', padding: '5px', height: '40px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
  
        <textarea
            name="reply"
            value={Reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Update your reply here..."
            rows={20}
            cols={50}
            style={{ width: '100%', marginBottom: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleUpdate} style={{ backgroundColor: '#2ECC71', cursor: 'pointer', display: 'block', margin: '0 auto' , color: '#fff',padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Update Reply</button>
    </form>
</div>

        </div>
    );
};

export default EditReplyForm;