import React from "react";
import {AiFillDelete} from 'react-icons/fa'

const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div key={id} >
            <div>
              <h3>{task}</h3>
              <p>{date}</p>
            </div>
            <div>
            <AiFillDelete/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
