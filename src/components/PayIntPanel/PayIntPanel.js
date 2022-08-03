import React from "react";
import pic1 from "../../assets/images/image2.png"
import pic2 from "../../assets/images/image3.png"
import pic3 from "../../assets/images/image5.png"
const PayIntPanel = () => {
  return (
    <div className="hero d-flex">
      <div className="img">
        <img src={pic2} className="pic2"></img>
        <img src={pic1} className="pic1"></img>
        <img src={pic3} className="pic3"></img>
      </div>
      <div className="box2">
        <div className="demo ">
          <h4>
            PAYMENT <br />
            INTEGRATION <br />
            PANEL
          </h4>{" "}
          <br />
          {/* <a  href='/Step4' className='btnC   '> ........................... </a>     */}
        </div>
      </div>
    </div>
  );
};

export default PayIntPanel;
