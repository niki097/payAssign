import React, { useState, useEffect } from "react";
import classNames from "classnames"; // Utility to conditionally apply classes
import slider1 from "../assets/imgs/slider1.webp";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

// Define slides with unique content
const slides = [
  { id: 1, img: slider1 },
  { id: 2, img: slider1 },
  { id: 3, img: slider1 },
];

// Duplicate the first slide at the end for seamless looping
const extendedSlides = [...slides, { id: 1, img: slider1 }];

const AutoSlider = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically transition to the next slide every second
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      handleNext();
    }, interval);

    return () => clearInterval(timer); // Clean up on unmount
  }, [interval]);

  // // Detect when to reset to create a seamless loop
  // useEffect(() => {
  //   let timer;
  //   if (currentIndex === extendedSlides.length - 1) {
  //     timer = setTimeout(() => {
  //       setIsTransitioning(false); // Disable transition temporarily
  //       setCurrentIndex(1); // Jump to the second slide to create the loop effect
  //     }, interval); // Adjust timeout to match the slide duration
  //   }

  //   return () => clearTimeout(timer); // Clean up on component unmount or index change
  // }, [currentIndex, interval]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + extendedSlides.length) % extendedSlides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedSlides.length);
  };

  return (
    <div className='slider relative overflow-hidden w-full'>
      {/* Slider content with smooth transitions */}
      <div
        className={classNames(
          "slides",
          "flex",
          "transition-transform",
          `duration-${isTransitioning ? 2000 : 0}` // Disable transition for instant jump when looping
        )}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide) => (
          <div
            key={slide.id}
            className='slide-content flex-shrink-0 w-full h-full flex justify-center items-center text-center'
          >
            <img src={slider1} alt='' />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-gray-400 text-white p-2 rounded'
        onClick={handlePrevious}
      >
        <GrFormPrevious />
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-gray-400 text-white p-2 rounded'
        onClick={handleNext}
      >
        <MdNavigateNext className='text-xl' />
      </button>
    </div>
  );
};

export default AutoSlider;
