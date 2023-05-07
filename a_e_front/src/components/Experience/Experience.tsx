import React, { useEffect, useState } from "react";
import "./experience.scss";
import { ExpOne } from "./ExpOne";
import axios from "axios";
import { IExp } from "../../models/Experience";

export const Expirience = () => {
  const [exp, setExp] = useState<IExp[]>([]);
  const getExp = () => {
    axios
      .get<IExp[]>("http://localhost:5080/api/experience")
      .then((res) => setExp(res.data))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getExp();
  });

  return (
    <div className='exp_div_all'>
      <h1> Experience</h1>
      <div className='exp_div_map-exp'>
        {exp.map((ex) => (
          <ExpOne key={ex._id} experience={ex} />
        ))}
      </div>
    </div>
  );
};
