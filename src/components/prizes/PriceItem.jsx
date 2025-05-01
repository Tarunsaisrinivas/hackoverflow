import React, { useRef, useState } from "react";
import ReactCardFlip from "react-card-flip";

const PriceItem = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const ranks = {
    0: "/prize.svg",
    1: "/1st_Place_Medal.webp",
    2: "/2nd_Place_Medal.webp",
    3: "/3rd_Place_Medal.webp",
  };

  const iconNum = props.rank || 0;
  const icon = ranks[iconNum];

  // New prize amounts for each rank
  const prizes = {
    1: "Rs.15000",
    2: "Rs.9000",
    3: "Rs.6000",
  };

  const prizeAmount = prizes[props.rank] || ""; // Default prize amount if no rank is passed

  // Award descriptions for each rank
  const awards = {
    1: [
      "Cheque of ₹15,000",
      "🏅 Internships with a stipend of ₹8,000 for each winning team member",
      "🎓 Exclusive Industrial Visit to T-Hub, Hyderabad",
      "🏭 Free Industrial Training",
      "First Prize – Memento",
      "Awarded to the team with the most innovative and impactful project.",
    ],
    2: [
      "Cheque of ₹9,000",
      "Second Prize – Memento",
      "Given to the second-best team for creativity, technical excellence, and impactful solutions.",
    ],
    3: [
      "Cheque of ₹6,000",
      "Third Prize – Memento",
      "Awarded to the third-best team for commendable innovation and technical skill.",
    ],
    0: ["Participation certificate", "Access to exclusive webinars and talks"],
  };

  const awardList = awards[props.rank] || awards[0];

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div
        className={`glassy-div w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 max-[1100px]:p-1 p-1 rounded-3xl relative overflow-hidden m-4 `}>
        <img className="w-[50%] mx-auto" src={icon}></img>
        <ul className="mt-[8%] max-[1100px]:mt-[2%] pl-[10%] text-[1.15rem] max-[1100px]:text-[0.8rem] text-white list-disc flex justify-center flex-col gap-2 h-[45%]">
          {awardList.slice(0, 3).map((award, index) => (
            <li key={index}>
              {index == 0 ? (
                <span className="font-semibold text-orange-300 ">{award}</span>
              ) : (
                award
              )}
            </li>
          ))}
        </ul>
        {awardList.length > 3 ? (
          <button
            onClick={() => setIsFlipped(true)}
            className="px-10 max-[1100px]:text-sm max-[1100px]:px-7 max-[1100px]:py-[0.42rem] py-2 mb-2 text-lg font-semibold text-white bg-[#232323] rounded-full w-fit">
            More
          </button>
        ) : (
          ""
        )}
        <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
      </div>

      <div
        className={`glassy-div w-[21rem] h-[29rem] max-[1100px]:w-[13.8rem] max-[1100px]:h-[20rem] flex flex-col items-center gap-4 max-[1100px]:p-1 p-1 rounded-3xl relative overflow-hidden m-4 `}>
        <img className="w-[50%] mx-auto p-7 max-[1100px]:p-5" src={ranks[0]}></img>
        <ul className="mt-[8%] max-[1100px]:mt-[2%] pl-[10%] text-[1.15rem] max-[1100px]:text-[0.8rem] text-white list-disc flex justify-center flex-col gap-2 h-[45%]">
          {awardList.slice(3).map((award, index) => (
            <li key={index}>{award}</li>
          ))}
        </ul>
        <button
          onClick={() => setIsFlipped(false)}
          className="px-10 max-[1100px]:text-sm max-[1100px]:px-7 max-[1100px]:py-[0.42rem] py-2 mb-2 text-lg font-semibold text-white bg-[#232323]  rounded-full w-fit">
          Back
        </button>
        <div className="absolute w-[150%] rounded-full aspect-square bg-[#232323] -z-10 translate-y-[-65%]"></div>
      </div>
    </ReactCardFlip>
  );
};

export default PriceItem;
