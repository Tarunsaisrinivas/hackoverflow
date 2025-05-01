import React, { useRef, useEffect } from "react";

const ScheduleContent = (props) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const animate = props.isLeft ? "animate-right" : "animate-left";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("in-visible");
            entry.target.classList.add(animate);
            observer.unobserve(entry.target); // Stop observing once the element is visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`w-[90%] px-4 py-8 max-sm:py-6 in-visible m-12 ${
        props.isLeft ? "ml-0" : "mr-0"
      } glassy-div rounded-3xl `}>
      <h2 className="text-2xl font-semibold text-orange-300 max-sm:text-lg ">
        {props.time}
      </h2>
      <h3 className="my-2 text-xl font-semibold text-white max-sm:text-lg max-sm:my-1">
        {props.title}
      </h3>
      <p className="text-white max-sm:text-sm ">{props.description}</p>
    </div>
  );
};

export default ScheduleContent;
