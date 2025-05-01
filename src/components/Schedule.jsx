import React from "react";

import RightSchedule from "./schedule/RightSchedule";
import LeftSchedule from "./schedule/LeftSchedule";

import events from "../constants/timelinelist";

const Schedule = () => {


  return (
    <>
      <div className="flex flex-col items-center w-full" id="schedule">
        <h1 className="my-20 text-5xl font-semibold text-white titles">
          Schedule
        </h1>
        <div className="w-[30rem] max-sm:w-[20rem] flex flex-col items-center">
          {events.map((event, index) => {
            if (index % 2 == 0) {
              return (
                <RightSchedule
                  key={index}
                  idx={index}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                  isLast={index == events.length - 1}
                />
              );
            } else {
        
              return (
                <LeftSchedule
                  key={index}
                  idx={index}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                  isLast={index == events.length - 1}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Schedule;
