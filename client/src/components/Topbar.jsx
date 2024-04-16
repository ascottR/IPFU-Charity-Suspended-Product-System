import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
//import { Link } from "react-router-dom";
//TODO:theres a error occur when using link property

function TopBar() {
  return (
    <div className="bg-green-200 text-green-800 shadow-md px-4  flex justify-between items-center w-full">
      <div>
        {/* Social links */}
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="mr-4">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div>
        <a href="http://localhost:3001/login" className="text-right mr-4">
          Shop Owner?
        </a>
      </div>
    </div>
  );
}

export default TopBar;
