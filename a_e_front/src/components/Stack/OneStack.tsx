import React, { FC } from "react";
import "./OneStack.scss";
import { IStack } from "../../models/IStack";
import { motion } from "framer-motion";
import { enter_Anim_y } from "../../const_anim/enter_anim";

interface IOneStack {
  stack: IStack;
}

export const OneStack: FC<IOneStack> = ({ stack }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.5, once: true }}
    >
      <motion.div
        variants={enter_Anim_y}
        custom={0.4}
        className='onestack_div_all'
      >
        <h1>{stack.title}</h1>
        <br />
        <div className='onestack_div_map-substack'>
          {stack && stack.subStack.map((ss) => <h4 key={ss}>{ss}</h4>)}
        </div>
      </motion.div>
    </motion.div>
  );
};
