import React from 'react';
import './card.css'
import StarRating from './StarRating';

function ProductCard({ image, title, description, rating, price, salePrice }) {
  return (
    <div className="product-card border p-4 rounded-lg bg-white shadow-lg flex flex-col items-center">
      <img src={image} alt={title} className="object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <StarRating rating={rating} /> {/* Display the star rating */}
      <div className="flex pt-3">
      <span className="text-gray-500 line-through">{price}</span>
      <span className="text-gray-800">{salePrice}</span>
      </div>
    
      <button className="productcard-btn mt-4 text-white py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
