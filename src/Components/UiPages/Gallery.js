import React from "react";
import "../UIStyle/Gallery.css";

const Gallery = () => {
  function handleButtonClick() {
    var link = document.createElement("a");
    link.href =
      "https://www.google.com/maps/dir//Shreeji+Cloud+Kitchen/@13.0628051,77.4480994,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae23e7a9bfc86b:0x39374a9528744374!2m2!1d77.5181399!2d13.0628145?entry=ttu";
    link.target = "_blank";
    link.click();
  }
  function handleWrite() {
    var link = document.createElement("a");
    link.href =
      "https://www.google.com/search?hl=en-IN&gl=in&q=Shreeji+Cloud+Kitchen,+Mata+Kripa+Building,+near+Axis+Bank+ATM,+Brindavan+Layout,+Shetty+Halli,+Jalahalli+West,+Bengaluru,+Karnataka+560015&ludocid=4122845988370269044&lsig=AB86z5UtcF64uheKCoNBoPv0QBV5";
    link.target = "_blank";
    link.click();
  }

  function handleRead() {
    var link = document.createElement("a");
    link.href =
      "https://www.google.com/search?hl=en-IN&gl=in&q=Shreeji+Cloud+Kitchen,+Mata+Kripa+Building,+near+Axis+Bank+ATM,+Brindavan+Layout,+Shetty+Halli,+Jalahalli+West,+Bengaluru,+Karnataka+560015&ludocid=4122845988370269044&lsig=AB86z5UtcF64uheKCoNBoPv0QBV5#lrd=0x3bae23e7a9bfc86b:0x39374a9528744374,1";
    link.target = "_blank";
    link.click();
  }
  function handlemap() {
    var link = document.createElement("a");
    link.href =
      "https://www.google.com/maps/place/Shreeji+Cloud+Kitchen/@13.0628145,77.5181399,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae23e7a9bfc86b:0x39374a9528744374!8m2!3d13.0628145!4d77.5181399!16s%2Fg%2F11rsr0d8q3";
    link.target = "_blank";
    link.click();
  }

  function handleGoogleBussines() {
    var link = document.createElement("a");
    link.href = "https://www.google.com/business/";
    link.target = "_blank";
    link.click();
  }

  function handleReport() {
    var link = document.createElement("a");
    link.href = "https://support.google.com/business/answer/7388122";
    link.target = "_blank";
    link.click();
  }
  return (
    <>
      <div className="Writereviw">
        <h5 onClick={handleWrite}>WRITE A REVIEW</h5>
        <h5 onClick={handleRead}>READ MORE</h5>
      </div>
      <div className="menuss" id="gallery">
        <h5>GALLERY</h5>
      </div>
      <div
        className="imgesHead"
        id="gallery"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <div>
          <img
            src="https://media.discordapp.net/attachments/1095304486882385984/1096323205519638589/banner_2.png?width=622&height=624"
            alt=""
            className="galleryImages"
          />
        </div>
        <div>
          <img
            src="https://media.discordapp.net/attachments/1095304486882385984/1096323205788078080/bANNER.png?width=1179&height=663"
            alt=""
            className="galleryImages"
          />
        </div>
      </div>

      <div className="menuss " id="contect">
        <h5>CONTACT US</h5>
      </div>
      <div className="pt-5 d-flex  justify-content-center">
        <img
          src="/Images/map1.png"
          alt=""
          style={{ width: "85%" }}
          onClick={handlemap}
        />
      </div>
      <footer className="pt-5 pb-5 container">
        <div className="Footer ">
          <div className="Contact conctectinfo">
            <h3> Address</h3>
            <button>CALL NOW</button>
            <p> 089513 70587</p>
            <p> info@shaancloudkitchen.com</p>
          </div>
          <div className="Contact conctectinfo">
            <h3>Contact</h3>
            <button onClick={handleButtonClick}>GET DIRECTIONS</button>
            <p>437, Raja gardern 110015</p>
          </div>
          <div className="Contact">
            <h3>Business Hours</h3>
            <div>
              <p>Mon: 10:30 AM - 7:30 PM </p>
              <p>Tue: 10:30 AM - 7:30 PM</p>
              <p> Wed: 10:30 AM - 7:30 PM </p>
              <p>Thu: 10:30 AM - 7:30 PM </p>
              <p>Fri: 10:30 AM - 7:30 PM</p>
              <p> Sat: 10:30 AM - 7:30 PM</p>
              <p>Sun: 10:30 AM - 7:30 PM</p>
            </div>
            {/* <table>
              <tr>
                <td>Mon :</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Tue:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Wed:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Thu:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Fri:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Sat:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
              <tr>
                <td>Sun:</td>
                <td>10:30 AM - 7:30 PM</td>
              </tr>
            </table> */}
          </div>
        </div>
      </footer>
      <hr style={{ margin: "auto", width: "88%" }} />

      <div className=" container d-flex  justify-content-between pb-5 text-muted ">
        <p onClick={handleReport} className="hover p-3">
          Report abuse
        </p>
        <p onClick={handleGoogleBussines} className="hover p-3">
          Powered by <b>Google</b>
        </p>
      </div>
    </>
  );
};

export default Gallery;
