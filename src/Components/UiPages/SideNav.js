import React from "react";
import "../UIStyle/SideNav.css";
import { Link } from "react-scroll";

function SideNav(props) {
  const { isOpen, onClose } = props;

  return (
    <div
      className={`sidenav ${isOpen ? "sidenav-open" : ""}`}
      onClick={onClose}
    >
      <ul>
        <li>
          <Link to="footer" smooth={true} duration={0}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="Testimonials" smooth={true} duration={0}>
            Testimonials{" "}
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={0}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contect" smooth={true} duration={0}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
