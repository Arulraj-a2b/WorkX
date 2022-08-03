import React from 'react'
import { Button, Col} from 'react-bootstrap';
import barCode from "../../assets/barcode.png";
import download from "../../assets/images/download.png"

const PaymentIntegration = () => {
  return (
    <Col lg={5}>
        <div className='hero-content'>
            <div className='hero-action-box payment-box'>
                <div className='bar-code-box'>
                    <img src={download} alt="bar-code" className='img-fluid' />
                </div>
            </div>
        </div>
    </Col>
  )
}

export default PaymentIntegration