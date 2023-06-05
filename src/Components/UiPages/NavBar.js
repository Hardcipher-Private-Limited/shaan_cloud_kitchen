import React, { useState } from "react";
import "../UIStyle/Home.css";
import SideNav from "./SideNav";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  function handleButtonClick() {
    var link = document.createElement("a");
    link.href =
      "https://www.google.com/maps/dir//Shreeji+Cloud+Kitchen/@13.0628051,77.4480994,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae23e7a9bfc86b:0x39374a9528744374!2m2!1d77.5181399!2d13.0628145";
    link.target = "_blank";
    link.click();
  }

  function handleWhatsApp() {
    var link = document.createElement("a");
    link.href = "https://api.whatsapp.com/send?phone=918951370587&text=";
    link.target = "_blank";
    link.click();
  }

  function handleCall() {
    var link = document.createElement("a");
    link.href = "tel:+91-89513-70587";
    link.target = "_blank";
    link.click();
  }
  return (
    <>
      <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-white text-danger nav_bar shadow p-3">
        <div class="container-fluid ">
          <a class="navbar-brand " href="#"></a>

          <div
            class="collapse navbar-collapse  form-inline d-flex flex-row justify-content-between  "
            id="navbarScroll"
          >
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll header"
              style={{ "--bs-scroll-height": "100px" }}
            >
              {" "}
              <div className="d-flex menuBarhead">
                <button
                  className={isOpen ? "cancel-btn" : "open-btn"}
                  onClick={isOpen ? handleClose : handleToggle}
                >
                  {isOpen ? (
                    <img
                      src="Images/close.png"
                      alt="Cancel"
                      className="openMenu"
                    />
                  ) : (
                    <img
                      src="Images/menu (1).png"
                      alt="Cancel"
                      className="openMenu"
                    />
                  )}
                </button>
                <SideNav isOpen={isOpen} />
              </div>
              <li class="nav-item fontWight ">Shaan Cloud Kitchen</li>
            </ul>
            <div className="d-flex justify-content-between">
              <form class="d-flex navBarLast">
                <div class="" type="submit" onClick={handleWhatsApp}>
                  <img src="./Images/chat.png" alt="" className="p-2" />
                  Whatsapp
                </div>
              </form>
              <form class="d-flex navBarLast pl-2 ">
                <div class="" type="submit" onClick={handleCall}>
                  <img src="./Images/phone-call.png" alt="" className="p-2" />
                  Call Now
                </div>
              </form>
              <form class="d-flex navBarLast  ">
                <div class="" onClick={handleButtonClick} type="submit">
                  <img
                    src="./Images/get-directions-button.png"
                    alt=""
                    className="p-2"
                  />
                  Get Directions
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
