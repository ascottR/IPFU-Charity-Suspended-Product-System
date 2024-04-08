import Sidebar from "../components/smSidebar/Sidebar";
import NavBar from "../components/smNavbar/Navbar";
import Popup from "../components/smAddPopup/Popup";
import EditPopup from "../components/smEditPopup/editPopup";

import "../assets/css/smInventory-styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Inventory() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State for error handling
  const [showAddPopup, setShowAddPopup] = useState(false); // State for controlling add popup visibility
  const [showEditPopup, setShowEditPopup] = useState(false); // State for controlling edit popup visibility
  const [editPopupProductId, setEditPopupProductId] = useState(null); // State to store the id of the product being edited

  //fetching all products
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message); // Set error state
      });
  }, []);

  //delete product
  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3000/products/delete/${productId}`)
      .then((response) => {
        console.log(response.data.message); // Product deleted successfully
        // Remove the deleted product from the state
        setProducts(products.filter((product) => product._id !== productId));
        window.alert("Product deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  // Function to handle opening add popup
  const handleOpenAddPopup = () => {
    setShowAddPopup(true);
  };

  // Function to handle closing add popup
  const handleCloseAddPopup = () => {
    setShowAddPopup(false);
  };

  // Function to handle opening edit popup
  const handleOpenEditPopup = (productId) => {
    setEditPopupProductId(productId);
    setShowEditPopup(true);
  };

  // Function to handle closing edit popup
  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Change this as needed

  // Get current products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <div className="content-section grid sm:grid-cols-12 gap-16 ">
        <div className="sm:col-span-2">
          <Sidebar />
        </div>
        <div className="inventory-section sm:col-span-10 mt-6 mr-28">
          <div className="inventory-wrapper flex items-center justify-between">
            <h2>Inventory</h2>
            <div>
              <button onClick={handleOpenAddPopup} className="mr-2">
                Add New Product
              </button>
              <button>Generate PDF</button>
            </div>
          </div>
          <div className="product-list">
            <h3>Product List</h3>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Name</th>
                  <th>Price(LKR)</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td className="action-column">
                      <button
                        onClick={() => handleOpenEditPopup(product._id)}
                        className="mr-2"
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        />
                      </button>
                      <button onClick={() => handleDeleteProduct(product._id)}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-red-500 hover:text-red-700 cursor-pointer"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="mr-2"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span>{currentPage}</span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastProduct >= products.length}
                className="ml-2"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup for adding new product */}
      <Popup showPopup={showAddPopup} handleClosePopup={handleCloseAddPopup} />
      {/* Popup for editing product */}
      <EditPopup
        showPopup={showEditPopup}
        handleClosePopup={handleCloseEditPopup}
        productId={editPopupProductId}
      />
    </>
  );
}

export default Inventory;
