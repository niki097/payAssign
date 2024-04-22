import React from 'react';

function Button({ onClick, text, className }) {
  return (
    <div>
      {/* I will make a dynamic button for the whole application, only one button will work */}
      <div className="flex justify-center mt-4">
        <button
          onClick={onClick}
          className={`text-l px-10 my-6 py-2 bg-customOrange text-white rounded-md shadow-md hover:bg-customOrange 
          focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}>
          {text}
        </button>
      </div>
    </div>
  );
}

export default Button;
