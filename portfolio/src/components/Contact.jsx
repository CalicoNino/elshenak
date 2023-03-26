import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { birdonhead, discord, gmail } from "../assets";

const ContactList = ({ username, image, alt }) => {
  return (
    <div className="flex items-center overflow-hidden red-gradient rounded-md">
      <div className="h-10 w-10 flex items-center justify-center bg-highlight rounded-l-md">
        <img src={image} alt={alt} className="h-6 w-6" />
      </div>
      <div className="px-2 py-1 text-white font-medium whitespace-no-wrap">
        {username}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Feel free to message me</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10 items-center justify-center">
        <ContactList
          username="calico.nino#6804"
          image={discord}
          alt="discord"
        />
        <ContactList username="elshenak@gmail.com" image={gmail} alt="gmail" />
      </div>

      <div className="sticky bottom-0 w-full h-1/3">
        <img alt="birdonhead" src={birdonhead} />
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
