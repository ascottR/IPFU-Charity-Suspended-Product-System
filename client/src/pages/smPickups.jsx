import React, { useState, useEffect } from "react";
import axios from "axios";

function Pickups() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State for error handling

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

  return (
    <div>
      <h1>Products</h1>
      {error ? (
        <p>Error: {error}</p> // Display error message if an error occurs
      ) : (
        <ul>
          {products.map((product) => (
            <>
              <li key={product._id}>{product.name}</li>
              <li>{product.code}</li>
              <li>{product.price}</li>
              <li>{product.quantity}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Pickups;
