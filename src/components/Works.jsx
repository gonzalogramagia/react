import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  live_demo_link,
  source_code_link,
}) => {
  return (
    <motion.div className="bg-tertiary p-5 rounded-2xl w-[100%] sm:w-[360px]">
      <div
        onClick={() => window.open(live_demo_link, "_blank")}
        className="cursor-pointer relative w-full h-[230px]"
      >
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => {
              e.stopPropagation(e);
              window.open(source_code_link, "_blank");
            }}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div
        onClick={() => window.open(live_demo_link, "_blank")}
        className="cursor-pointer mt-5"
      >
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="text-center">
      <motion.div>
        {/* <span className={`${styles.sectionSubText}`}><span className="font-bold">Projects say more</span> than words</span> */}
        <h2 className={`${styles.sectionHeadText} mt-6`}>Best works</h2>
        <p className="mt-3 text-secondary text-[17px] leading-[30px] mx-auto w-[83%] md:w-[40%]">
          Each project includes a brief description, along with links to its
          GitHub repository and live demo
        </p>
      </motion.div>

      <div className="text-left mt-20 mx-auto w-[100%] flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <Tilt
            options={{
              max: 20,
              scale: 1,
              speed: 100,
              reverse: true,
              perspective: 2000,
            }}
          >
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
