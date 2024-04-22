import React from 'react'
import Carousel from '../Carousel/Carousel';

function Testimonial() {
    const cardData = [
        {
          name: "Astro Raj K",
          price: "₹ 40/min",
        },
        {
          name: "Astro Raj K",
          price: "₹ 40/min",
        },
        {
          name: "Astro Raj K",
          price: "₹ 40/min",
        }
         // Add more card data as needed
    ];

  return (
    <>
        <div className="testimonial_container py-8">
        <Carousel className='testimonial_card py-4' slidesToShow={3} cardData={cardData} customArrows={true} customDots={true}
            testimonialWords={true} testimonialProfile={true}/>
        </div>
    </>
  )
}

export default Testimonial