// Contact.js
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from './arrow.png';

export default function Contact() {
  return (
    <div className='contact'>
        <div class="contact-image"></div>
        <div class="contact-form">
            <h1>Free Consultation</h1>
                <Row className="g-2">
                <Col md>
                <InputGroup className="mb-4" />
                <Form.Control
                placeholder="Full Name *"
                />
                <InputGroup className="mb-1" />
                <Form.Control
                placeholder="I'm interested in"
                />
                </Col>
                </Row>
                <Row className="g-2">
                <Col md>
                <InputGroup className="mb-4" />
                <Form.Control
                placeholder="Email *"
                />
                <InputGroup className="mb-1" />
                <Form.Control
                placeholder="Phone Number *"
                />
                </Col>
                </Row>
                <button className='free-sub'>Get a Free Consultation <img src={arrow} width='20px' height='18px'/></button>
        </div>
    </div>
  );
}
