import React from "react";
import GoldSponsors from "./sponsers/GoldSponsors";
const Sponsors = () => {
  return (
    <div className="flex flex-col items-center w-full" id="sponsors">
      <h1 className="m-20 text-5xl font-semibold text-center text-white titles">
        Sponsors
      </h1>
      <GoldSponsors />
    </div>
  );                    
};

export default Sponsors;
