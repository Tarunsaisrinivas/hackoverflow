import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="px-5 py-10 text-white" id="about">
     
      <div className="flex flex-col items-center justify-center space-y-8 font-bold md:flex-row md:space-y-0 md:space-x-8">
        {/* First card */}
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-56 h-[7.5rem]">
          <span className="text-4xl text-cyan-500">
            {inView && <CountUp start={0} end={3} duration={2} />}
          </span>
          <span className="text-xl">Themes</span>
        </div>

        {/* Second card */}
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-52">
          <span className="text-4xl text-pink-500">
            {inView && <CountUp start={0} end={24} duration={2} />}
          </span>
          <span className="text-xl">Hours of Hacking</span>
        </div>

        {/* Third card */}
        <div className="flex flex-col items-center p-4 text-center bg-gray-700 rounded-lg w-52">
          <span className="text-4xl text-orange-500">
            {inView && <CountUp start={0} end={1000} duration={2} separator="," suffix="+" />}
          </span>
          <span className="text-xl">Participants</span>
        </div>
      </div>

      <div className="grid gap-8 mt-10 font-medium md:grid-cols-2">
        <div className="flex items-center justify-center h-full p-6 bg-gray-700 rounded-lg">
          <div className="max-w-lg overflow-y-auto text-white">
          <h2 className="mb-10 text-4xl font-bold text-center titles">
        What is HackOverFlow
      </h2>
            <p className="mb-4 text-lg">
              HackOverFlow is a 24-hour national hackathon hosted by the{" "}
              <strong>SRKR Coding Club</strong> from the renowned{" "}
              <strong>Sagi Rama Krishnam Raju Engineering College (Autonomous), Bhimavaram, Andhra Pradesh.</strong> 
              This event brings together students from across the country to tackle real-world challenges through technology.
              Participants will have the chance to create innovative solutions in areas like healthcare, agriculture, and women & child safety.
            </p>
            <p className="mb-4 text-lg">
              <strong>This year's themes are focused on healthcare, agriculture, and women & child safety.</strong> 
              Whether you're a seasoned coder or just starting out, this hackathon offers a great opportunity to learn, work with others, 
              and build tech solutions that make a real impact.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-auto p-3 bg-gray-600 rounded-lg">
          <img
            src="/team.jpg"
            alt="Hackathon"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
