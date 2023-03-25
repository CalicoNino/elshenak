import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, textVariant } from "../utils/motion";
import Fire from "./Fire";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Feel free to message me</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
