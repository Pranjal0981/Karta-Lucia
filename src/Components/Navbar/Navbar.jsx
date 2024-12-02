import React, { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logos/KL Logo white.png";
import Client from "../../Assets/Navbar/user_1077114.svg";
import Blogs from "../../Assets/Navbar/freepik__minimal_blog.svg";
import Project from "../../Assets/Navbar/explore.svg";
import Contact from "../../Assets/Navbar/contact.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to a section by setting a URL hash
  const goToSection = (path, id) => {
    navigate(path + "#" + id);
  };

  // Scroll to the section if the URL contains a hash (e.g., /#Clients)
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Delay the scroll to ensure content has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1)); // Remove the '#' from hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // 200ms delay to ensure the section is in the DOM
    }
  }, [location]);

  return (
    <div className="navbar">
        {/* Navigate to Clients section */}
        <button
          className="menu-icon"
          onClick={() => goToSection("/", "Clients")}
        >
          <img src={Client} className="nav-icons" alt="Clients Icon" />
        </button>

        {/* Navigate to Blogs section */}
        <button
          className="search-icon"
          onClick={() => goToSection("/", "Blogs")}
        >
          <img src={Blogs} className="nav-icons" alt="Blogs Icon" />
        </button>

        <button className="logo" onClick={() => goToSection("/", "home")}>
          <img src={Logo} alt="Logo" />
        </button>

        {/* Navigate to Projects page */}
        <button className="profile-icon" onClick={() => navigate("/Projects")}>
          <img src={Project} className="nav-icons" alt="Projects Icon" />
        </button>

        {/* Navigate to email */}
        <button
          className="cart-icon"
          onClick={() =>
            (window.location.href = "mailto:vanshdeepofficial@gmail.com")
          }
        >
          <img src={Contact} className="nav-icons" alt="Contact Icon" />
        </button>
      </div>
  );
};

export default Navbar;
