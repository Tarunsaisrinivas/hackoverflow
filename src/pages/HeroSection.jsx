import React, { useState } from 'react';
import Countdown from 'react-countdown';
import { Link as ScrollLink } from 'react-scroll';  // Import react-scroll Link

const Banner = () => {
  const countdownDate = new Date('2024-10-18T00:00:00').getTime();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-4 text-center">
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
          <span className="text-4xl md:text-6xl text-cyan-500 font-bold">{days}</span>
          <span className="text-lg md:text-xl font-bold">Days</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
          <span className="text-4xl md:text-6xl text-pink-500 font-bold">{hours}</span>
          <span className="text-lg md:text-xl font-bold">Hours</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
          <span className="text-4xl md:text-6xl text-purple-500 font-bold">{minutes}</span>
          <span className="text-lg md:text-xl font-bold">Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-black bg-opacity-30 p-2 md:p-4 rounded-xl">
          <span className="text-4xl md:text-6xl text-orange-500 font-bold">{seconds}</span>
          <span className="text-lg md:text-xl font-bold">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-screen md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-5">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ml-10">
        <h1 className="text-3xl mt-20 font-serif">SRKR CODING CLUB PRESENTS</h1>
        <h1 className="md:text-5xl text-4xl font-semibold mb-4 titles">HACK OVERFLOW~2K24</h1>
        <p className="text-2xl mb-2 font-bold">18 - 19TH OCT</p>
        <p className="text-xl mb-8">HACK FOR A CHANGE !</p>
        <Countdown date={countdownDate} renderer={renderer} />

        {/* Buttons container */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
          {/* Go to Themes Button */}
          <ScrollLink
            to="themes"  // Link to the "themes" section
            smooth={true}
            duration={500}
            className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300 cursor-pointer"
          >
            Go to Themes
          </ScrollLink>

          {/* Register Now Button */}
          <a
            // href="https://docs.google.com/forms/d/e/1FAIpQLSdVyjJdFcq6N0cF77GUCD1Uag61aYVizyVm-Y0PMbTMCQmbig/formResponse"
            href='https://forms.gle/XuPZN1aBkxoofAqG7' target='_blank'
            className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-8 md:w-full w-1/2 hidden md:flex justify-center">
        <img src="/boy.png" alt="Character" className="h-[30rem] w-auto drop-shadow-3xl" />
      </div>

      {/* Modal for showing themes and PDF */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-4xl">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-900 font-bold"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Instructions</h2>
            <p className="mb-4 text-gray-700">
              Please review the themes and problem statements for HackOverFlow 2024. Below is the official document:
            </p>

            {/* PDF iframe */}
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/HACKOVERFLOW-2K24-PROBLEM-STATEMENTS.pdf"
                className="w-full h-96"
                title="HackOverFlow Problem Statements"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
