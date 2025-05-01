import React, { useState } from "react";
import queryList from "../constants/querylist";

const Query = () => {
  return (
    <div
      className="flex flex-row justify-center w-full gap-10 my-40 max-lg:flex-col max-lg:items-center"
      id="faq">
      <div className="flex flex-col items-end justify-between w-5/12 max-sm:w-full max-sm:items-center">
        <div className="flex flex-col items-end gap-10 max-lg:items-center">
          <label className="w-full text-5xl font-semibold text-center text-white titles">
            Have a query ?
          </label>
          <span className="w-5/6 text-white max-lg:text-center">
            Join with Hackoverflow and experience the breeze of hackathon with
            us.
          </span>
        </div>
        <div className="flex items-center justify-center w-full h-full max-lg:hidden">
          <img
            src="/about.png"
            className=" max-h-min  scale-x-[-1] drop-shadow-3xl"
          />
        </div>
      </div>
      <div className="w-5/12 max-lg:w-10/12">
        <hr className="h-[1px] border-gray-700 border-0 border-t-[1px] "></hr>
        {queryList.map((query, index) => {
          return (
            <QueryItem
              key={index}
              question={query.question}
              answer={query.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

const QueryItem = (props) => {
  const [showAns, setShoeAns] = useState(false);

  return (
    <>
      <div
        className="flex items-center justify-between w-full py-6 cursor-pointer "
        onClick={() => setShoeAns(!showAns)}>
        <label className="text-lg font-medium text-white">
          {props.question}
        </label>
        <span
          className={`material-symbols-outlined ml-4  text-white flex justify-center transition-all duration-300  ${
            showAns ? "rotate-[-90deg]" : "rotate-[90deg]"
          }`}>
          arrow_back_ios
        </span>
      </div>
      <p className={`text-base text-gray-300 pb-8 ${showAns ? "" : "hidden"} `}>
        {props.answer}
      </p>
      <hr className="h-[1px] border-gray-700 border-0 border-t-[1px]"></hr>
    </>
  );
};

export default Query;
