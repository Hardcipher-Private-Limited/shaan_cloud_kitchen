import React, { useState } from "react";
import "../UIStyle/Home.css";
import "../UIStyle/HomeStyle.css";
import NavBar from "./NavBar";
import {
  COMBOSData,
  Data,
  LunchBox,
  ParathasData,
  RICEITEMSData,
  SNACKSData,
  TESTIMONIALSData,
  VEGCURRYData,
  VEGDRYData,
} from "../MockData/MockData";
import Gallery from "./Gallery";

const Home = () => {
  function handleWhatsapp() {
    window.location.href =
      "https://api.whatsapp.com/send?phone=918951370587&text=";
  }
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <div className="headerOne">
          <h1>
            <span>Shaan Cloud Kitchen</span>
          </h1>
          <p>🍽 Pure Vegetarian 🍽</p>
          <p>Open today until 7:30 PM</p>
          <button onClick={handleWhatsapp}>WHATSAPP 089513 70587</button>
        </div>
        <div className="pt-5 d-flex  justify-content-center">
          <img
            src="https://media.discordapp.net/attachments/1095304486882385984/1096323205788078080/bANNER.png?width=1179&height=663"
            alt=""
            className="headImg"
          />
        </div>
        <div className="menuStart" id="footer">
          <h4 className="menuUnderLine">Menu</h4>
        </div>
        <div>
          <h4 className="menuss">CHATS</h4>
        </div>
        <div className="container">
          {Data?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <p>{item.time}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h4 className="menuss">PARATHAS</h4>
        </div>
        <div className="container">
          {ParathasData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <p>{item.extra}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h4 className="menuss">
            SUPER SNACKS & SWEETS(Available only on Order)
          </h4>
        </div>
        <div className="container">
          {SNACKSData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <p>1Pcs</p>
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="menuss">Lunch Box</h4>
        </div>
        <div className="container">
          {LunchBox?.map((item, index) => {
            let { name, price, extra } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
                <p>{item.extra}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="menuss">COMBOS</h4>
        </div>
        <div className="container">
          {COMBOSData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="menuss">RICE ITEMS</h4>
        </div>
        <div className="container">
          {RICEITEMSData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="menuss">VEG DRY</h4>
        </div>
        <div className="container">
          {VEGDRYData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h4 className="menuss" id="Testimonials">
            VEG CURRY
          </h4>
        </div>
        <div className="container">
          {VEGCURRYData?.map((item, index) => {
            let { name, price, time } = item;
            return (
              <div className="maping">
                <h5>{item.name}</h5>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
        <div className="TESTIMONIALSStart">
          <h5 className="menuUnderLine">TESTIMONIALS</h5>
        </div>
        <div className="container">
          {TESTIMONIALSData?.map((item, index) => {
            let { name, info, rating } = item;
            return (
              <div className="maping">
                <p className="ratings">
                  {item.rating}{" "}
                  <spam className="three-dotsss">
                    <img
                      src="Images/three-dots.png"
                      alt=""
                      className="three-dot"
                    />
                  </spam>
                </p>
                <p>{item.info}</p>
                <p className="names">{item.name}</p>
              </div>
            );
          })}
        </div>
        <Gallery />
      </div>
    </>
  );
};

export default Home;
