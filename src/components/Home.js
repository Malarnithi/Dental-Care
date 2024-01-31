// Home.js
import React from 'react';
import image1 from './img1.png';
import arrow from './arrow.png';
import subtract from './Subtract.jpg';
import customer from './customer service.png';
import vector from './Vector.png';
import chair from './chair.png';
import star from './star.png';

export default function Home() {
  return (
    <>
    <div className='main-section'>
    <div className='home'>
      <div className='home-content'>
        <h1 className='home-bold'>Dental Excellence Starts</h1>
        <h1 className='home-bold'>Here:Your Guide to a</h1>
        <h1 className='home-bold'>Brighter, Healthier</h1>
        <h1 className='home-bold'>Smile</h1>
        <button className='book-btn mt-5'>Booking Now <img src={arrow} width='18px' height='18px'/></button>
        <div className='home-division'>
            <div class="division1"> 
            <img className='division-image' src={customer} width='100px' height='100px'/>
            <div className='division-content'>
                <h4>Free Consultation</h4>
                <p>We offer flexible appointment scheduling and free to accommodate your busy life</p>
            </div>
            </div>
            <div class="division2">     
            <img className='division-image' src={vector} width='100px' height='100px'/>
                <h4>Expert Dentist</h4>
                <p>Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry</p>
            </div>
            <div class="division3">
            <img className='division-image' src={star} width='100px' height='100px'/>
                <h4>High User Rating</h4>
                <p>We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized</p>
            </div>
            <div class="division4"> 
            <img className='division-image' src={chair} width='100px' height='100px'/>
                <h4>Best Equipment</h4>
                <p>Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible</p>
            </div>
        </div>
        <img className='subtract' src={subtract}/>
          <img className='dental' src={image1} width='40%' height='600px' ></img>
      </div>
    </div>
    </div>
    </>
  );
}
