import React, { useState } from "react";
import axios from "axios";
import "./Popup.css";
import { toast } from "react-toastify";

function Popup({ showPopup, handleClosePopup }) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    price: "",
    quantity: "",
    image: null, // Initialize image state
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    formDataToSend.append("code", formData.code);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("image", formData.image);

    try {
      const response = await axios.post(
        "http://localhost:3000/products/add",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data.message);
      toast.success("Product Added successfully!"); // Display success toast
      handleClosePopup();
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={handleClosePopup}>
            &times;
          </span>
          <h2>Add New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="code">Code:</label>
              <input
                type="text"
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    )
  );
}

export default Popup;
