import React from 'react'
import product1 from '../../assets/imgs/product1.avif'

import Carousel from '../Carousel/Carousel'

function AboutBodyWash() {
  const cardData = [
    {
      Image1: product1,
      name: "Body Wash",
      price: "₹ 200",
    },
    {
      Image1: product1,
      name: "Body Scrub",
      price: "₹ 400",
    },
    {
      Image1: product1,
      name: "Book Lotion",
      price: "₹ 300",
    },
    {
      Image1: product1,
      name: "Body Cream",
      price: "₹ 1000",
    },
    {
      Image1: product1,
      name: "lorem, ipsum",
      price: "₹ 500",
    }
    // Add more card data as needed
];
  return (
    <>
     <div className="astro_services_container grid grid-cols-1 justify-center bg-white py-4">
          <Carousel className='astro_services' slidesToShow={5} cardData={cardData} customArrows={true} customDots={true} showButton={false} carouselName={true} carouselImage={true}/>
      </div>
    </>
  )
}

export default AboutBodyWash