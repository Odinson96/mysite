import React from "react";
import "./About.scss";
import { Skill } from "../Skill/Skill";
import { motion } from "framer-motion";

export const About = () => {
  const aboutMe = [
    { body: "Experience in building UI/UX", image: "ui" },
    { body: "More than a year of experience with TypeScript", image: "ts" },
    { body: "English - upper intermediate", image: "eng" },
    {
      body: "Understanding of Frontend-Backend-Deployment cycle",
      image: "cycle",
    },
    { body: "Good knowledge of JavaScript, TypeScript", image: "lang" },
    {
      body: "Strong experience with React functional components, React hooks, React Router",
      image: "react",
    },
  ];

  return (
    <div className='about_div_all'>
      <h1 className='about_h1_title'>About me:</h1>
      <br />
      <h3>Development experience of more than 3 years</h3>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
        className='about_div_education_flex'
      >
        <div className='about_div_education'>
          <h3>
            Education:
            <br />
            Automated control systems,
            <br /> Information systems and technologies (engineer) in 'KKEP'
          </h3>
        </div>
      </motion.div>
      <motion.div initial={false} className='about_div_premap-skill'>
        {aboutMe.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className='about_div_map-skill'
          >
            <Skill skill={skill} i={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
