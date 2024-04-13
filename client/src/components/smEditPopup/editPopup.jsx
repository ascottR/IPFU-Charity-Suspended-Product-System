import React, { useState, useEffect } from "react";
import axios from "axios";
import "./editPopup.css";
import { toast } from "react-toastify";

function EditPopup({ showPopup, handleClosePopup, productId }) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    price: "",
    quantity: "",
    image: "",
  });

  useEffect(() => {
    // Fetch product data based on productId when component mounts
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((response) => {
        const productData = response.data.product;
        setFormData({
          code: productData.code,
          name: productData.name,
          price: productData.price,
          quantity: productData.quantity,
          image: productData.image,
        });
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/update/${productId}`, formData)
      .then((response) => {
        console.log(response.data.message); // Product updated successfully
        toast.success("Product updated successfully!");
        handleClosePopup();
        window.location.reload(); // Refresh the page
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <span className="close" onClick={handleClosePopup}>
            &times;
          </span>
          <h2>Edit Product</h2>
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
              <label htmlFor="price">Price (LKR):</label>
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
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Update Product</button>
          </form>
        </div>
      </div>
    )
  );
}

export default EditPopup;
