import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Intro,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Certifications,
  Flame,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-redspace">
        {/* <StarsCanvas /> */}
        <Flame />
        <div className="flex flex-col">
          <Navbar />
          <Intro />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        {/* <Works /> */}
        <Certifications />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
