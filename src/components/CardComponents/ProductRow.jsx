import React from 'react';
import ProductCard from './ProductCard';
import card1 from '../../assets/imgs/card1.webp';
import hoverImage from '../../assets/imgs/addtocarthover.webp';


// Data for the product cards
const cardData = [
  {
    image: card1,
    title: 'Sanfe Instant Tan & D..',
    description: 'For Dead Skin, Tan & ...',
    rating: 4.3,
    price: '₹ 798.00',
    salePrice: '₹ 649.00',
  },
  {
    image: card1,
    title: 'Another Product',
    description: 'Some description...',
    rating: 3.8,
    price: '₹ 599.00',
    salePrice: '₹ 499.00',
  },
  {
    image: card1,
    title: 'Another Product',
    description: 'Another description...',
    rating: 4.5,
    price: '₹ 1200.00',
    salePrice: '₹ 999.00',
  },
  {
    image: card1,
    title: 'Fourth Product',
    description: 'Yet another description...',
    rating: 4.1,
    price: '₹ 899.00',
    salePrice: '₹ 799.00',
  },
];

function ProductRow() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((data, index) => (
          <ProductCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}

export default ProductRow;
