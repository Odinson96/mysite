import React, { useEffect, useState } from "react";
import "./Stack.scss";
import axios from "axios";
import { IStack } from "../../models/IStack";
import { OneStack } from "./OneStack";

export const Stack = () => {
  const [stack, setStack] = useState<IStack[]>([]);
  useEffect(() => {
    getAllStacks();
  });

  const getAllStacks = () => {
    axios
      .get<IStack[]>(`http://localhost:5080/api/stack`)
      .then((res) => setStack(res.data))
      .catch((err) => console.log(err.mesage));
  };
  return (
    <div>
      <div className='anchor'></div>
      <h1 className='stack_h1_mystack'>My stack:</h1>
      <div className='stack_div_all'>
        {stack &&
          stack.map((st, i) => (
            <div key={st._id}>
              <OneStack stack={st} />
            </div>
          ))}
      </div>
    </div>
  );
};
