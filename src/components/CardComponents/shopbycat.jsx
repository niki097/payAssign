import React from 'react';
import Button from '../Button';
import onhover from '../../assets/imgs/onhover.webp'
import dailyproduct from '../../assets/imgs/dailyproduct.webp'
import bodycare from '../../assets/imgs/bodycare.webp'
import grooming from '../../assets/imgs/grooming.webp'
import support from '../../assets/imgs/support.webp'
import './card.css'

// Array of card data
const categories = [
  {  image: dailyproduct, buttonText: 'Body Seller' },
  {  image: bodycare, buttonText: 'Body Care' },
  { image: grooming, buttonText: 'Body Care ' },
  { image: support, buttonText: 'Body Care' },
  { image: onhover, buttonText: 'Body Care' },
];

// Component that maps through the categories array to create cards
function ShopByCategory() {
  return (
    <div className="container w-full py-10 px-0 my-5"> {/* Centers text and adds padding */}
      <h1 className="text-2xl font-bold mb-6 px-10">SHOP BY CATEGORY</h1> {/* Heading for the section */}
      <div className="flex flex-wrap justify-center px-8 gap-6"> {/* Flex container for the cards */}
        {categories.map((category, index) => (
          <div key={index} className="rounded-lg grid justify-center"> {/* Individual card */}
            <img
              src={category.image}
              alt=""
              className=" object-cover shop-by-cat-img" /* Image styling */
            />
            <Button className="shopbycat-btn" text={category.buttonText} /> {/* Button with unique text */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopByCategory;
