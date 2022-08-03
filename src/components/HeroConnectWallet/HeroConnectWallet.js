import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import svg from "../../assets/keplr-logo.svg";

const HeroConnectWallet = () => {
  return (
    <Col lg={5}>
      <div className="hero-content">
        <h1 className="hero-title">Connet Wallet</h1>
        <p className="hero-para">
          Claim, Own and Manage Fanclubs, choose <br /> from 250 clubs spread
          across 5 Major leagues
        </p>
        <div className="hero-action-box">
          <a
            href="https://www.keplr.app/"
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary d-block mb-3"
            style={{ backgroundColor: "#5500B1" }}
          >
           <div style={{marginLeft:"-70px"}}><img
              src="https://app.osmosis.zone/_next/image?url=%2Fimages%2Fkeplr-logo.png&w=128&q=75"
              alt=""
              srcset=""
              className=""
              style={{
                width: "45px",
                height: "45px",
                marginRight: "30px",
                padding: "4px",
              }}
            />
            Install Keplr{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "12px" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V17C17 17.7957 16.6839 18.5587 16.1213 19.1213C15.5587 19.6839 14.7957 20 14 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V6C0 5.20435 0.31607 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H9C9.55229 3 10 3.44772 10 4C10 4.55228 9.55229 5 9 5H3Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C12 0.447715 12.4477 1.49012e-08 13 1.49012e-08H19C19.5523 1.49012e-08 20 0.447715 20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V2H13C12.4477 2 12 1.55228 12 1Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893Z"
                fill="white"
              />
            </svg>
            <p style={{ fontSize: "9px", margin: "-13px 0px -2px 40px" }}>
              https://keplr.app/
            </p></div> 
          </a>
          <Link
            to="/payment-integration"
            className="btn btn-primary d-block"
            style={{ backgroundColor: "#5500B1" }}
          >
            <div style={{marginLeft:"-70px"}}><img
              src="https://app.osmosis.zone/_next/image?url=%2Fimages%2Fwallet-connect-logo.png&w=128&q=75"
              alt=""
              srcset=""
              style={{
                width: "45px",
                height: "45px",
                marginRight: "8px",
                padding: "4px",
              }}
            />
            Wallet Connect{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "12px" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.4477 15.4477 10 16 10C16.5523 10 17 10.4477 17 11V17C17 17.7957 16.6839 18.5587 16.1213 19.1213C15.5587 19.6839 14.7957 20 14 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V6C0 5.20435 0.31607 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H9C9.55229 3 10 3.44772 10 4C10 4.55228 9.55229 5 9 5H3Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1C12 0.447715 12.4477 1.49012e-08 13 1.49012e-08H19C19.5523 1.49012e-08 20 0.447715 20 1V7C20 7.55228 19.5523 8 19 8C18.4477 8 18 7.55228 18 7V2H13C12.4477 2 12 1.55228 12 1Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893Z"
                fill="white"
              />
            </svg>
            <p style={{ fontSize: "9px", margin: "-13px 0px -2px 40px" }}>
              Keplr Moblie
            </p></div>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default HeroConnectWallet;
