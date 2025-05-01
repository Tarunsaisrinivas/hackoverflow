import React from "react";
import EduExpose from "../../assets/sponsors/eduexpose.png"

import GoldSponsorsItem from "./gold-sponsors/GoldSponsorItem";

const GoldSponsors = () => {
  return (
    <div className="flex flex-col items-center w-full bg-gradient-to-r from-gray-800 to-gray-900">
      
      <div className="flex flex-wrap justify-center ">
        <GoldSponsorsItem
        alt={'eduexpose'}
          icon={
            EduExpose
          }
          url={"https://www.eduexpose.in/"}
        />
      </div>
    </div>
  );
};

export default GoldSponsors;
