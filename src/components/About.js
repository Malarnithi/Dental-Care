// About.js
import React from 'react';
import aboutimg from './Frame 838.png';
import arrow from './arrow.png';

export default function About() {
  return (
    <div className='About'>
      <div class="about-image"> 
      <img src={aboutimg} width='80%' />
      </div>
      <div class="about-content"> 
      <h4 className='about-color'>About Us</h4>
      <h1 className='about-head'>Patient-Centered Care</h1>
      <div className='about-text'>
      <p>We are dedicated to providing exceptional dental care in a warm and welcoming environment.
         Our team of experienced, compassionate, and highly skilled professionals is here to ensure 
         your dental experience is comfortable and stress-free.</p>
         <h2 className='mission'>Our Mission</h2>
         <p>At 57Dentcare, our mission 
         is to promote optimal oral health and create lasting, confident smiles.</p>
         </div>
         <button className='learnmore'>Learn More <img src={arrow} width='20px' height='18px'/></button>
      </div>
    </div>
  );
}
