import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, name, icon, level }) => (
  <Tilt className="w-[55px] sm:w-[95px]" options={{ scale: 1, max: 8 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.33, 0.5)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div className="min-h-[100px] flex justify-center items-center flex-col group relative">
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 object-contain transition-all duration-300 group-hover:opacity-50"
        />
        <span className="absolute inset-0 flex justify-center items-center text-white text-sm font-medium bg-[#F6B40E] bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          +{level}
        </span>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="text-center mx-auto lg:max-w-[65%]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Always in Beta</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] mx-auto leading-[30px] sm:w-[100%] md:w-[62%]"
      >
        Web developer from Córdoba, Argentina, who loves challenging projects
        and wants to keep leveling up his coding skills
      </motion.p>

      <div className="mt-16 mb-[-36px] flex flex-wrap gap-10 justify-center">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
