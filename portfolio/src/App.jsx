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
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-redspace">
        <StarsCanvas />
        <div className="flex flex-col">
          <Navbar />
          <Intro />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;