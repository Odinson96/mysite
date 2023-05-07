import { FC } from "react";
import "./Skill.scss";

interface ISkill {
  skill: {
    body: string;
    image: string;
  };
  i: number;
}

export const Skill: FC<ISkill> = ({ skill, i }) => {
  const img = require(`../../image/${skill.image}.png`);
  return (
    <div className='skill_div_all'>
      <span className='skill_span_skill-body'>{skill.body}</span>
      <img className='skill_img_skill' src={img} alt={skill.image} />
    </div>
  );
};
