import React from 'react';
import face from './image 31.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Carousel } from 'react-bootstrap'; 

export default function Test() {

  const testimonials = [
    {
      quote: "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care.",
      author: "David Gahan",
      location: "Detroit, Michigan",
    },
    {
      quote: "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care.",
      author: "David Gahan",
      location: "Detroit, Michigan",
    },
    {
      quote: "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care.",
      author: "David Gahan",
      location: "Detroit, Michigan",
    },
  ];

  return (
    <div className='test'>
      <div className='map'>
        <div className='test-head'>
          <h3>Testimonials</h3>
          <h1>What People Say About Us</h1>
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index} className='test-content'>
                <img className="test-image" src={face} alt="Face" width='120px' mb-4 /> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Carousel.Caption>
                  <h3>{`"${testimonial.quote}"`}</h3>
                  <p>{testimonial.author}</p>
                  <p>{testimonial.location}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
