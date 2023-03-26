import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import { certs } from "../constants";

const Spinner = () => {
  return (
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I like to study</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {certs.map(({ name, image, loading, url }) => (
          <div className="w-1/3 h-1/3 relative">
            {loading ? (
              <img alt={name} src={image} className="opacity-25" />
            ) : (
              <a href={url}>
                <img alt={name} src={image} />
              </a>
            )}

            {loading && (
              <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
