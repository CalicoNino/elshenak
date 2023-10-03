import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { TfiLinkedin, TfiGithub, TfiEmail, TfiReceipt } from "react-icons/tfi";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Wave from "./Wave";

const ServiceCard = ({ icon, link }) => (
  <Tilt className="w-[75px] h-auto">
    <motion.div
      variants={fadeIn("right", "spring", 3 * 0.5, 0.75)}
      className="w-full red-gradient p-1 rounded-full shadow-card border border-redspace"
    >
      <a
        className="bg-redspace hover:bg-highlight rounded-full py-5 flex justify-evenly items-center flex-col h-[75px]"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-highlight text-[17px] max-w-3xl leading-[30px]"
      >
        As a Full Stack Developer specializing in frontend and backend
        development, I have expertise in TypeScript, JavaScript, React, Vue.js,
        Node.js, and proficiency in Python and Go. I have hands-on experience
        with a variety of tools including AWS, Git, Jenkins, Docker, and
        Kubernetes, and have optimized CI/CD processes for faster deployments.
        Additionally, I specialize in Microservices, Distributed Systems, Web &
        App Development, and Cloud Architecture, with a keen interest in
        Cryptography. Fluent in both English and French, I am passionate about
        staying up-to-date with the latest technologies and delivering
        efficient, scalable, and user-friendly solutions that solve real-world
        problems.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        <ServiceCard
          icon={<TfiLinkedin />}
          link="https://www.linkedin.com/in/elshenak"
        />
        <ServiceCard icon={<TfiGithub />} link="https://github.com/elshenak" />
        <ServiceCard icon={<TfiEmail />} link="mailto:elshenak@gmail.com" />
        {/* <ServiceCard icon={<TfiReceipt />} link="/elshenak_resume.pdf" /> */}
      </div>

      <div className="flex flex-row items-center justify-center mt-3">
        <Wave />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
