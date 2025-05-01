import React, { useState, useEffect } from "react";
import { Image } from "antd";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false); // State to control image loading

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image has loaded
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="w-full max-w-md p-5 bg-white rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105">
        {/* Popup content */}
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Important Steps</h2>
        
        {/* Image Section */}
        <div className="relative mb-4 flex justify-center items-center w-full h-56 sm:h-72 max-h-80 overflow-hidden rounded-lg shadow-md"> {/* Responsive heights */}
          <Image 
            src="/prizeposter.jpg" 
            className={`w-full h-full object-contain transition-all duration-500 ${imageLoaded ? 'filter-none' : 'filter blur'}`} 
            onLoad={handleImageLoad}
            style={{ transition: "filter 0.5s" }} // Add transition to filter property
          />
        </div>

        <ul className="space-y-2 text-gray-700 list-disc px-4 text-left">
          <li>
            Participants may also bring their own problem statements, provided they align with one or a mix of the hackathon themes.
          </li>
        </ul>

        <div className="mt-6 text-center">
          <button
            onClick={handleClose}
            className="font-bold text-white px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
