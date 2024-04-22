import React, { useState, useEffect } from 'react';
import './navbar.css';
import MegaMenu from './NavLinks';

const Topnav = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1,  caption: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
    { id: 2, caption: ' Lorem ipsum dolor sit amet.' },
    { id: 3,  caption: 'Lorem ipsum dolor sit, amet lorem' },
  ];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
     <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`mySlides fade ${slideIndex === index ? 'active' : ''}`}
          style={{ display: slideIndex === index ? 'block' : 'none' }}>
          <div className="numbertext">
            <p>{`${slide.id} / ${slides.length}`}</p>
            <div className="text">{slide.caption}</div>
          </div>
        </div>
      ))}
    </div>
    
    </>
   
  );
};

export default Topnav;