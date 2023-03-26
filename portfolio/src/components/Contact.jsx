import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { birdonhead, discord, gmail, linkedin } from "../assets";

const ContactList = ({ name, image, alt, link }) => {
  return (
    <a href={link}>
      <div className="flex items-center overflow-hidden red-gradient rounded-md">
        <div className="h-10 w-10 flex items-center justify-center bg-highlight rounded-l-md">
          <img src={image} alt={alt} className="h-6 w-6" />
        </div>
        <div className="px-2 py-1 text-white font-medium whitespace-no-wrap">
          {name}
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Feel free to message me</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <div className="flex flex-col">
        <div className="mt-10 flex flex-wrap gap-10 items-start justify-center">
          <ContactList name="calico.nino#6804" image={discord} alt="discord" />

          <ContactList
            name="elshenak@gmail.com"
            image={gmail}
            alt="gmail"
            link="mailto:elshenak@gmail.com"
          />

          <ContactList
            name="/in/elshenak"
            image={linkedin}
            alt="linkedin"
            link="https://www.linkedin.com/in/elshenak/"
          />
        </div>

        <div className="h-1/3">
          <img alt="birdonhead" src={birdonhead} />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
