"use client";
import React, { useState } from "react";
import "./CustomSection.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CustomSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
    <div className="flex flex-col items-center mt-20">
     <h1 className="text-4xl font-bold heading-2">Completed  <span className="text-[#209ff1]"> Over 1500+ work </span> & Still counting.</h1>
      <div className="container">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[140px] text-[#15b2ec] text-5xl font-bold">
                  <CountUp start={0} end={150} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold">
                Happy Clients
            </h2>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[140px] text-[#f5a416] text-5xl font-bold">
                  <CountUp start={0} end={650} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold">
                Projects
            </h2>
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="drop">
            <div className="content ">
              {counterOn && (
                <h2 className="mt-[120px] text-[#E3354B] text-5xl font-bold">
                  <CountUp start={0} end={10} duration={3} delay={1} /> +
                </h2>
               
              )}
               <h2 className="text-[#6a7695] text-3xl font-semibold text-center">
               Years of Experience
            </h2>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      </div>
    </>
  );
};

export default CustomSection;
