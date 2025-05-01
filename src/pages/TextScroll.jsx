import React from 'react';
import Marquee from 'react-fast-marquee';

const TextScroll = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-2">
      <div className="font-bold text-lg flex md:text-xl text-gray-100 underline whitespace-nowrap">
        Note <span className="hidden md:flex"> :</span>
      </div>
      <div className="overflow-hidden w-full">
        <Marquee direction="left" speed={60} className="text-red-600 bg-gray-100 font-bold">
        Participants can select a problem statement from the document provided.
        Participants may also bring their own problem statements, provided they align with one or a mix of the hackathon themes.
        </Marquee>
      </div>
    </div>
  );
};

export default TextScroll;
