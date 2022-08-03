import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroConnectWallet = () => {
  return (
    <Col lg={5}>
        <div className='hero-content'>
            <h1 className='hero-title'>
                Connet Wallet
            </h1>
            <p className='hero-para'>
                Claim, Own and Manage Fanclubs, choose <br /> from 250 clubs spread across 5 Major leagues
            </p>
            <div className='hero-action-box'>
                <a href="https://www.keplr.app/" rel="noreferrer" target="_blank" className='btn btn-primary d-block mb-3'>Login to Keplr</a>
                <Link to="/payment-integration" className='btn btn-primary d-block'>Wallet Connect</Link>
            </div>
        </div>
    </Col>
  )
}

export default HeroConnectWallet