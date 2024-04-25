import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const stars = [];

  // Generate stars based on rating
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      // If the rating is at least the current index + 1, display a full star
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i + 0.5) {
      // If the rating is at least the current index + 0.5, display a half star
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      // Otherwise, display an empty star
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}
  <span className='font-bold text-md'>{rating}</span>
  </div>;
}

export default StarRating;
