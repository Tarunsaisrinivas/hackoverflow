import React from "react";

const GoldSponsorsItem = (props) => {
  const icon = props.icon;
  const url = props.url;
  return (
    <a href={url}>
      <div className=" m-5 hover:bg-[#CA8A045E] glassy-div rounded-3xl w-[31.3rem] h-[10.2rem] max-lg:w-[16rem] max-lg:h-[8.05rem] max-lg:p-6 p-10 flex items-center justify-center ">
        <img src={icon} alt={props.alt} className="h-full "></img>
      </div>
    </a>
  );
};

export default GoldSponsorsItem;
