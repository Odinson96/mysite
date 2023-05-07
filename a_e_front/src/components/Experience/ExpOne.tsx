import React, { FC } from "react";
import { IExp } from "../../models/Experience";
import "./ExpOne.scss";
import { motion } from "framer-motion";
import { enter_Anim } from "../../const_anim/enter_anim";
interface IExOne {
  experience: IExp;
}

export const ExpOne: FC<IExOne> = ({ experience }) => {
  const anim = enter_Anim;
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div variants={anim} custom={0.4} className='expone_div_all'>
        <h1>{experience.company}</h1>
        <h3>
          <strong>{experience.title}</strong>
        </h3>
        <h4>{experience.date}</h4>
        <a href={experience.site} rel='noreferrer' target='_blank'>
          {experience.site}
        </a>
        <div className='expone_div_desc'>
          <h4>{experience.description.desc}</h4>
          <h3>Functionaly:</h3>
        </div>
        <ul className='expone_ul_func'>
          {" "}
          {experience.description.functional.map((func) => (
            <li key={func}>{func}</li>
          ))}
        </ul>
        <h2>Stack:</h2>
        <br />
        <h4>{experience.description.stack}</h4>
      </motion.div>
    </motion.div>
  );
};
