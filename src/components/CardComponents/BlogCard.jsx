import React, { useState } from 'react';
import idealskin from '../../assets/imgs/idealskin.webp';

function BlogCard() {
  const [showAll, setShowAll] = useState(false);
  const [numToShow, setNumToShow] = useState(4);

  const handleShowAll = () => {
    setShowAll(true);
    setNumToShow(8); // Change the number to show all cards
  };

  return (
    <div className="container mx-auto px-8 py-5 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 blog_card_margin">
        {[...Array(numToShow)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg blog_border">
            <a href="">
            <div className="p-4">
              <div className="flex justify-center blog_card">
                <img src={idealskin} alt="aries" className="rounded-md object-cover blog_card_img" />
              </div>
              <h2 className="text-lg font-semibold mt-2 text-start px-2 pt-3">April 21, 2024</h2>
              <p className="text-sm font-medium text-gray-600 text-justify px-5">7 Tips to achieve Ideal back & bum skin</p>
            </div>
            </a>
           
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-4">
          <button onClick={handleShowAll} className="px-10 text-xl my-8 py-2 bg-customOrange text-white rounded-md shadow-md hover:bg-customOrange focus:outline-none focus:ring-2 focus:ring-blue-500">
            View All
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogCard;
