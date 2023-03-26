import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages, technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {languages.map(({ name, icon }) => (
        <div
          className="w-28 h-28 animate-bounce hover:animate-none overflow-visible transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-redspace duration-300 rounded-full hover:border hover:border-highlight"
          style={{ animationDelay: `${Math.random() * 10 * 400}ms` }}
          key={name}
        >
          <BallCanvas icon={icon} />
        </div>
      ))}

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(({ name, icon }) => (
          <div
            className=" animate-pulse h-16 w-16 flex items-center justify-center bg-redspace rounded-full hover:border hover:border-highlight hover:bg-highlight hover:animate-none overflow-visible transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300"
            style={{ animationDelay: `${Math.random() * 10 * 400}ms` }}
            key={name}
          >
            <img src={icon} alt={name} className="h-8 w-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
