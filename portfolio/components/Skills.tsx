// import Image from "next/image";
import React from "react";

const framData = ["React", "Tailwind", "Next", "Vue", "GraphQL"];

const toolData = ["AWS", "Auth0"];

const langData = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "C",
  "C++",
  "Java",
  "C#",
  "LATEX",
  "PHP",
  "HTML",
  "CSS",
  "BASH",
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-7">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-items-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>

        <h3>Framworks & Technologies</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-6">
          {framData.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div
                key={index}
                className="grid grid-row-2 gap-2 justify-center items-center"
              >
                <div key={index} className="m-auto">
                  {/* <Image
                    key={index}
                    src={`/../public/logos/${item}-logo.png`}
                    width="20px"
                    height="20px"
                    alt={`${item}-logo`}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3>Programming Languages</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {framData.map((item, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer"
            >
              <div
                key={index}
                className="grid grid-row-2 gap-2 justify-center items-center"
              >
                <div key={index} className="m-auto">
                  {/* <Image
                    key={index}
                    src={`/../public/logos/${item}-logo.png`}
                    width="20px"
                    height="20px"
                    alt={`${item}-logo`}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
