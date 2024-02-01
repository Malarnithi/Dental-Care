import './App.css';
import './media.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Why from './components/Why';
import Test from './components/Test';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './components/arrow.png';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
      <div>
        <Navbar className='menu' expand="lg">
          <Navbar.Brand className='brand' href="/">57<span style={{color:'#89DB7B'}}>D</span><span>entcare</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto menu-items">
              <Nav.Link href="/">Home1</Nav.Link>
              <Nav.Link href="/service">Services</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/why">Why Choose Us</Nav.Link>
              <Nav.Link href="/test">Testimonials</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button href="/contact" className='contact-btn'>Contact Us <img src={arrow} width='18px' height='18px'/></button>
        </Navbar>
        
        <Routes>
        <Route path="/" element={<>
          <Home />
          <Service />
          <About />
          <Why />
          <Test />
          <Contact />
          <Footer />
        </>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/why" element={<Why />} />
          <Route path="/test" element={<Test />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
