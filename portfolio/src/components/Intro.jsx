import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Flame, Wave } from ".";

const Intro = () => {
  return (
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute inset-0 top-[120px] z-20 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="animate-ping flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 red-gradient" />
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
      </div>

      <Flame />
      <Flame />

      <div className="z-20 absolute bottom-60 xs:bottom-10  w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-highlight flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-highlight mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro;
