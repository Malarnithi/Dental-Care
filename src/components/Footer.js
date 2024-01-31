// Footer.js
import React from 'react';
import arrow from './Frame 265.png';
import social from './Frame 269.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import youtube from './youtube.png';
import pinterest from './pinterest.png';
import linkedin from './linkedin.png';
import tiktok from './tiktok.png';
import instagram from './instagram.png';


export default function Footer() {
  return (
    <div className='footer'>
          <span className='footer-brand' href="/">57<span style={{color:'#89DB7B'}}>D</span><span>entcare</span></span>
          <div className='footer-content'>
            <div class="footer1">
               <h3>Company</h3>
               <p>Home</p>
               <p>Services</p>
               <p>About Us</p>
               <p>Why Choose Us</p>
               <p>Testimonials</p>
               <p>Contact Us</p>
           </div>
            <div class="footer2"> 
            <h3>Pages</h3>
               <p>404</p>
               <p>Licensing</p>
               <p>Instructions</p>
               <p>Style Guide</p>
               <p>Changelog</p>
               <p>More Templates!</p>
            </div>
            <div class="footer3"> 
            <h3>Address</h3>
            <p>123 Dental Avenue City ville,</p>
            <p> State 12345 United States</p>
            <p>View on Maps</p>

            <h3>Enquiries</h3>
            <p>(123) 456-7890</p>
            <p>info@57dentcare.com</p>
            </div>
            <div class="footer4">
            <h3>Newsletter</h3>
            <p>Stay Updated with our Latest News</p>
            <input className='newsletter' placeholder='Your Email'></input><img src={arrow} />
             <div className='social-icons'>
              <h5>Follow Us</h5>
              <img src={facebook} width='24px'/>
              <img src={twitter} width='22px' />
              <img src={youtube} width='22px' />
              <img src={pinterest} width='22px' />
              <img src={linkedin} width='20px' />
              <img src={tiktok} width='20px' />
              <img src={instagram} width='20px' />
              </div> 
             </div>
          </div>
    </div>
  );
}
