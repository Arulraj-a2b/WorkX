import React from "react";
import { useState } from "react";
import "./Purchase.scss"
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import Text3 from "../../assets/images/text3.png";
import Col1 from "../../assets/images/col1.png";
import Col2 from "../../assets/images/col2.png";
import Col3 from "../../assets/images/col3.png";
import Col4 from "../../assets/images/col4.png";
// import Graphic from "../../Assets/images/graphic.png";
const Purchase = (props) => {
  const [selectedClient,setSelectedClient] = useState([]);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }
  return (
    <div>
      <div className="container-fluid bg pttr">
        <div className="row graphic">
          <div className="col-lg-10 offset-2 my-5 ">
            <img src={Text3} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row graphic">
          <div
            className="col-lg-10 offset-2"
            style={{
              width: "100%",
              marginLeft: "auto",
              padding: "0px 0px 0px 50px",
            }}
          >
            <div className="row ">
              <div
                className="col-lg-2 col-sm-4 my-2 mx-5 bor textC"
                style={{ width: "15rem" }}
              >
                <img src={Col1} alt="" className="hl" />
                <h1 className="text-white mt-4">
                  <b> BASIC</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow">$100</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  200 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4 mx-5 my-2 bor textC"
                style={{ width: "15rem" }}
              >
                <img src={Col2} alt="" className="hlC2 pt-3" />
                <h1 className="text-white mt-5">
                  <b> PRO</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow">$500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip- $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  1000 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4 mx-5 my-2 bor textC"
                style={{ width: "15rem" }}
              >
                <img src={Col3} alt="" className="hl" />
                <h1 className="text-white mt-4">
                  <b> ELITE</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow">$1000</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 2000 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4 mx-5 my-2 bor textC"
                style={{ width: "15rem" }}
              >
                <img src={Col4} alt="" className="hlC mt-4" />
                <h3 className="text-white mt-5">
                  <b> LEGENDERY</b>
                </h3>{" "}
                <hr className="text-light" />
                <h3 className="yellow">$2500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 5000 FURY tokens.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5" style={{ margin: "3rem" }}>
          <div className="col graphic">
            <table className="table  text-light">
              <caption></caption>
              <thead>
                <tr className="text-center">
                  <th scope="col"> </th>
                  <th scope="col" className="yellow display-5">
                    {" "}
                    <b> BASIC</b>
                  </th>
                  <th scope="col" className="yellow display-5">
                    {" "}
                    <b> PRO</b>
                  </th>
                  <th scope="col" className="yellow display-5">
                    {" "}
                    <b> ELITE*</b>
                  </th>
                  <th scope="col" className="yellow display-5">
                    {" "}
                    <b> LEGENDERY*</b>
                  </th>
                </tr>
              </thead>
              <tbody style={{ borderColor: "#A93BFF" }}>
                <tr>
                  <th scope="row ps" style={{width:"14rem"}}>
                    PRICE IN <br /> USD
                  </th>
                  <td className="ps ">$100</td>
                  <td className="ps " style={{width:"16rem"}}>$500</td>
                  <td className="ps ">$1000</td>
                  <td className="ps" style={{width:"12rem"}}>$2500</td>
                </tr>
                <tr>
                  <th scope="row ps ">
                    Discount <br /> during campaign{" "}
                  </th>
                  <td className="ps ">N/A</td>
                  <td className="ps ">5%</td>
                  <td className="ps ">10%</td>
                  <td className="ps ">15%</td>
                </tr>
                <tr>
                  <th scope="row ps">
                    TOKEN VALUE DUE <br /> TO 2X DEAL{" "}
                  </th>
                  <td className="ps ">---</td>
                  <td className="ps ">---</td>
                  <td className="ps ">2000</td>
                  <td className="ps ">5000</td>
                </tr>
                <tr>
                  <th scope="row">
                    SIGN UP <br /> BONUS{" "}
                  </th>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                </tr>
                <tr>
                  <th scope="row">
                    MEMBERSHIP <br />
                    BONUS{" "}
                  </th>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    BEGINNER'S <br />
                    LUCK BONUS{" "}
                  </th>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                  <td>---</td>
                </tr>
                <tr>
                  <th scope="row" style={{ borderColor: "#A93BFF" }}>
                    EARLY <br />
                    BIRD BONUS{" "}
                  </th>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                  <td>
                    <DoneIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-lg-10 offset-2">
            <div className="row " style={{ marginBottom: "5.5rem" }}>
              <div className="col-lg-2 col-sm-3 mx-5  my-3   center " style={{marginLeft:"4rem"}}>
              <select value={selectedClient} onChange={handleSelectChange}>
              <option value="one"><a
                  href=""
                  className=" pkB  text-light px-lg-4 text-decoration-none" style={{marginLeft:"24px"}}
                >
                  {" "}
                  Select Package
                </a></option></select>
              </div>
              <div className="col-lg-2 col-sm-3 mx-5  my-3   center ">
                <a
                  href=""
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                >
                  {" "}
                  Select Package
                </a>
              </div>
              <div className="col-lg-2 col-sm-3 mx-5  my-3   center ">
                <a
                  href=""
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                >
                  {" "}
                  Select Package
                </a>
              </div>
              <div className="col-lg-2 col-sm-3 mx-5  my-3   center ">
                <a
                  href=""
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                >
                  {" "}
                  Select Package
                </a>
              </div>
            </div>
          </div>
          <div className="btn-buy" style={{ width: "25rem" }}>
            <Link
              to="/step3"
              className="esf"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </Link>{" "}
            {/* <select value={selectedClient} onChange={handleSelectChange}> //set value here */}
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
        {/* </select> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase