// PrintComponent.js
import React from "react";

const PrintComponent = ({ products }) => {
  // Calculate total value of each product and sum of all products
  const totalValueOfInventory = products.reduce(
    (acc, product) => {
      const productValue = product.quantity * product.price;
      return {
        totalValue: acc.totalValue + productValue,
        productsValue: [...acc.productsValue, productValue],
      };
    },
    { totalValue: 0, productsValue: [] }
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">I Paid For You</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">No</th>
              <th className="border border-gray-400 px-4 py-2">Code</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Price(LKR)</th>
              <th className="border border-gray-400 px-4 py-2">Quantity</th>
              <th className="border border-gray-400 px-4 py-2">
                Total Value(LKR)
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="text-center">
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {product.code}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {product.price}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {product.quantity}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {product.price * product.quantity}
                </td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2"></td>
              <td className="border border-gray-400 px-4 py-2">
                Total Inventory Value
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {totalValueOfInventory.totalValue}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrintComponent;
