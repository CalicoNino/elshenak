import React from "react";
import { styles } from "../styles";
import { Flame, Fire } from ".";

const Intro = () => {
  return (
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-highlight" />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-highlight">Karim</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I design and create Software full-time.
            <br className="sm:block hidden" /> And watch Anime part-time.
          </p>
        </div>
        <div>
          <Fire />
        </div>
      </div>

      <Flame />
      <Flame />
    </section>
  );
};

export default Intro;
