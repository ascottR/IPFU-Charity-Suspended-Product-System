import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../assets/css/sm_inventory.css";

const Inventory = () => {
  // Define initial product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      code: "P001",
      price: "$10",
      quantity: 5,
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      code: "P002",
      price: "$20",
      quantity: 3,
      image: "product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      code: "P003",
      price: "$15",
      quantity: 7,
      image: "product3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      code: "P004",
      price: "$25",
      quantity: 10,
      image: "product4.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      code: "P005",
      price: "$30",
      quantity: 8,
      image: "product5.jpg",
    },
    {
      id: 6,
      name: "Product 1",
      code: "P001",
      price: "$10",
      quantity: 5,
      image: "product1.jpg",
    },
    {
      id: 7,
      name: "Product 2",
      code: "P002",
      price: "$20",
      quantity: 3,
      image: "product2.jpg",
    },
    // Add more products as needed
  ]);

  // Pagination state
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
    <div>
      <>
        <NavBar />
        <div className="content-section grid sm:grid-cols-12 gap-16 ">
          <div className="sm:col-span-2">
            <Sidebar />
          </div>
          <div className="inventory-section sm:col-span-10 mt-6 mr-28">
            <div className="inventory-wrapper flex items-center justify-between">
              <h2>Inventory</h2>
              <button>Add New Product</button>
            </div>
            <div className="product-list">
              <h3>Product List</h3>
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.code}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <img src={product.image} alt={product.name} />
                      </td>
                      <td className="action-column">
                        <button>Edit</button>
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
                >
                  Previous
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastProduct >= products.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Inventory;
