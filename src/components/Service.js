// Service.js
import React from 'react';
import image1 from './Image1.png';
import image11 from './Image11.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';

export default function Service() {
  return (
    <>
    <div className='service'>
     <div className='service-head'>
        <h4 className='head-color'>Satisfy Solution</h4>
        <h1>The Best Dental Treatment</h1>
     </div>
     <div className='service-content'>
        <div className="service1">
            <div className='Service-text'>
             <h4>Teeth Whitening</h4>
             <p>Cosmetic treatment to enhance the whiteness of teeth</p>
             <button className='Readmore'>Read More</button>
             </div>
             <div className='Service-image'>
             <img src={image11} width='70px' height='200px'></img>
             <img src={image1} width='40px' height='200px'></img>
             </div>
        </div>
        <div className="service2"> 
        <div className='Service-text'>
        <h4>Dental Implant</h4>
        <p>Surgical placement of artificial tooth roots</p>
        <button className='Readmore'>Read More</button>
        </div>
        <div className='Service-image'>
                <img src={image2} height='200px'></img>
             </div>
        </div>
        <div className="service3">
        <div className='Service-text'>
            <h4>Teeth Filling</h4>
            <p>Restorative procedures to repair cavities and damaged teeth</p> 
            <button className='Readmore'>Read More</button>
            </div>
            <div className='Service-image'>
                <img src={image3} height='200px'></img>
             </div>
            </div>
        <div className="service4">
        <div className='Service-text'>
             <h4>Oral Surgery</h4>
             <p>Surgical procedures, including extractios and dental implants</p>
             <button className='Readmore'>Read More</button>
             </div>
        <div className='Service-image'>
                <img src={image4} height='200px'></img>
             </div> </div>
        <div className="service5"> 
        <div className='Service-text'>
             <h4>Crown and Bridges</h4>
             <p>Restoration options for damaged or missing teeth</p>
             <button className='Readmore'>Read More</button>
             </div>
        <div className='Service-image'>
                <img src={image5} height='200px'></img>
             </div></div>
        <div className="service6">
        <div className='Service-text'>
             <h4>Periodontal Care</h4>
             <p>Services for gum health, including scalling and root planing</p>
             <button className='Readmore'>Read More</button>
             </div>
        <div className='Service-image'>
                <img src={image6} height='200px'></img>
             </div> </div>
     </div>
     </div>
    </>
  );
}
