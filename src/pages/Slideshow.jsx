import React from 'react';
import { Carousel } from 'antd';

const Slideshow = () => {
  const images = [
    '/hackoverflow1.jpg',
    '/hackoverflow7.jpg',
    '/hackoverflow4.jpg', 
    '/hackoverflow5.jpg',
    
  ];

  return (
    <div className="carousel-container m-auto h-auto py-12 md:py-24 text-center" id='gallery'>
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">SRKR CODING CLUB EVENTS</h2>

      {/* Carousel with autoplay, fade effect, and autoplay speed */}
      <Carousel autoplay arrows autoplaySpeed={2500} effect="scroll">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full md:w-2/4 h-auto max-h-48 md:max-h-96 mx-auto object-cover rounded-xl shadow-2xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
