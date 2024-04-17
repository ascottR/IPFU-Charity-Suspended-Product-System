import React, { useState, useEffect } from "react";
import Sidebar from "../components/smSidebar/Sidebar";
import axios from "axios"; // Assuming you're using axios for API calls

const Dashboard = () => {
  const [productData, setProductData] = useState([]);
  const [productAmount, setProductAmount] = useState(0);
  const [productTypesCount, setProductTypesCount] = useState(0);
  const [outOfStockCount, setOutOfStockCount] = useState(0);
  const [suspendedProductCount, setSuspendedProductCount] = useState(0);

  useEffect(() => {
    // Fetch all products from your API
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        const products = response.data;
        setProductData(products);
        // Calculate summaries
        calculateSummaries(products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  // Function to calculate summaries
  const calculateSummaries = (products) => {
    // Calculate product amount
    const totalAmount = products.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );
    setProductAmount(totalAmount);
    // Calculate number of product types
    const uniqueProductTypes = new Set(products.map((product) => product.name));
    setProductTypesCount(uniqueProductTypes.size);
    // Calculate out-of-stock count
    const outOfStockProducts = products.filter(
      (product) => product.quantity === 0
    );
    setOutOfStockCount(outOfStockProducts.length);
    // Calculate suspended product count (if you have a field indicating suspended status)
    const suspendedProducts = products.filter(
      (product) => product.status === "suspended"
    );
    setSuspendedProductCount(suspendedProducts.length);
  };

  return (
    <div className="dashboard-container">
      <div className="content-section grid sm:grid-cols-12 gap-16">
        <div className="sm:col-span-2">
          <Sidebar />
        </div>
        <div className="inventory-section sm:col-span-10">
          <div className="inventory-wrapper">
            <h2>Dashboard</h2>
            <div className="dashboard-boxes">
              <div className="dashboard-box">
                <h3>Product Amount</h3>
                <p>${productAmount.toFixed(2)}</p>
              </div>
              <div className="dashboard-box">
                <h3>Number of Product Types</h3>
                <p>{productTypesCount}</p>
              </div>
              <div className="dashboard-box">
                <h3>Out of Stock</h3>
                <p>{outOfStockCount}</p>
              </div>
              <div className="dashboard-box">
                <h3>Suspended Products</h3>
                <p>{suspendedProductCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
