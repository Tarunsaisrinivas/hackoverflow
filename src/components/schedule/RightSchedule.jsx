import React, { useEffect, useState, useRef } from "react";
import ScheduleContent from "./ScheduleContent";

const RightSchedule = (props) => {
  const idx = props.idx || 0;
  const top = parseFloat((0.7 * idx).toFixed(2)).toString();

  let posStyles = "";

  if (idx === 0) {
    posStyles = "border-t-0 rounded-tl-[0px]";
  }

  if (props.isLast) {
    posStyles = "border-b-0 rounded-bl-[0px]";
  }

  const elementRef = useRef(null);
  const [isCentered, setIsCentered] = useState(false);
  const [isAbove, setIsAbove] = useState(false);

  useEffect(() => {
    const checkElementPosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;

        // Define the height of the horizontal line (threshold) around the viewport center
        const threshold = 300; // You can adjust this value as needed

        if (
          elementCenter >= viewportHeight / 2 - threshold / 2 &&
          elementCenter <= viewportHeight / 2 + threshold / 2
        ) {
          setIsCentered(true);
          setIsAbove(elementCenter < viewportHeight / 2);
        } else {
          setIsCentered(false);
          setIsAbove(elementCenter < viewportHeight / 2);
        }
      }
    };

    // Check position on scroll and resize
    window.addEventListener("scroll", checkElementPosition);
    window.addEventListener("resize", checkElementPosition);
    checkElementPosition(); // Initial check

    return () => {
      window.removeEventListener("scroll", checkElementPosition);
      window.removeEventListener("resize", checkElementPosition);
    };
  }, []);


  return (
    <div
      className="relative flex justify-start w-full"
      style={{ top: `-${top}rem` }}>
      <ScheduleContent
        time={props.time}
        title={props.title}
        description={props.description}
      />
      <div
        className={`absolute left-0 h-full border-r-0 rounded-l-[50px] w-1/2 border-[0.7rem] border-solid transition-all ease-in-out duration-1000 ${posStyles} ${
          isAbove || isCentered ? "border-orange-300" : "border-white"
        }`}></div>
      <div
        className={`${
          isCentered
            ? "h-12 border-[15px] border-white left-[-1.1rem] bg-orange-300"
            : "h-8 bg-white left-[-0.6rem] border-orange-300 border-[10px]"
        } aspect-square border-solid absolute rounded-full top-16 transition-all ease-out `}
        ref={elementRef}></div>
    </div>
  );
};

export default RightSchedule;
