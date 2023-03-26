import React from "react";
import { isMobile } from "react-device-detect";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5">
      {languages.map((language) => (
        <div
          className="w-28 h-28 animate-bounce hover:animate-none overflow-visible transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-redspace duration-300 rounded-full hover:border hover:border-highlight"
          style={{ animationDelay: `${Math.random() * 10 * 400}ms` }}
          key={language.name}
        >
          <BallCanvas icon={language.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
