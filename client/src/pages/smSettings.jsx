import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/smNavbar/Navbar";
import Sidebar from "../components/smSidebar/Sidebar";
import "../assets/css/smSettings-styles.css";
const shopprofileId = "661d4675782b8217ef930b48"; // Hardcoded shop profile ID

const ShopProfile = ({ id }) => {
  const [shopDetails, setShopDetails] = useState({
    shopName: "",
    description: "",
    owner: "",
    password: "",
    location: "",
    contact: {
      email: "",
      phone: "",
    },
    shopProfileImageURL: "",
  });

  useEffect(() => {
    // Fetch shop profile details from backend when component mounts
    axios
      .get(`http://localhost:3000/shops/${shopprofileId}`)
      .then((response) => {
        const shopProfileData = response.data.shopProfile;
        setShopDetails({
          shopName: shopProfileData.shopName,
          description: shopProfileData.description,
          owner: shopProfileData.owner,
          password: shopProfileData.password,
          location: shopProfileData.location,
          contact: {
            email: shopProfileData.contact.email,
            phone: shopProfileData.contact.phone,
          },
          shopProfileImageURL: shopProfileData.shopProfileImageURL,
        });
      })
      .catch((error) => {
        console.error("Error fetching shopprofile data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/shops/update/${shopprofileId}`, shopDetails)
      .then((response) => {
        console.log("Shop profile updated successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };
  return (
    <>
      <NavBar />
      <div className="content-section grid sm:grid-cols-12 gap-16 overflow-y-scroll">
        <div className="sm:col-span-2">
          <Sidebar />
        </div>
        <div className="shopdetails-section sm:col-span-5">
          <h2>Shop Details</h2>
          <p>
            Shop Name:{" "}
            <input
              type="text"
              name="shopName"
              value={shopDetails.shopName}
              onChange={handleChange}
            />
          </p>
          <p>
            Contact Email:{" "}
            <input
              type="email"
              name="contact.email"
              value={shopDetails.contact.email}
              onChange={handleChange}
            />
          </p>
          <p>
            Contact Phone:{" "}
            <input
              type="text"
              name="contact.phone"
              value={shopDetails.contact.phone}
              onChange={handleChange}
            />
          </p>
          <p>
            Location:{" "}
            <input
              type="text"
              name="location"
              value={shopDetails.location}
              onChange={handleChange}
            />
          </p>
          <p>
            Description:{" "}
            <textarea
              name="description"
              value={shopDetails.description}
              onChange={handleChange}
              rows={4} // Adjust rows for desired height
              className="description-textarea"
            />
          </p>

          <button onClick={handleUpdate}>Update Shop Details</button>
        </div>
        <div className="Image-section sm:col-span-5">
          <h2>Images</h2>
          {shopDetails.shopProfileImageURL && (
            <img src={shopDetails.shopProfileImageURL} alt="Shop Profile" />
          )}
          {/* Input for updating image, you can customize this as per your requirements */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setShopDetails((prevDetails) => ({
                ...prevDetails,
                shopProfileImageURL: URL.createObjectURL(e.target.files[0]),
              }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default ShopProfile;
