import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = 'https://6351820a3e9fa1244e608414.mockapi.io/api/task';

  const toggle = (e) => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //! CRUD - READ-
  const getTask = async () => {
    const {data} = await axios(url)
    setTask(data)
    console.log(data);
  }

  useEffect(() => {
    getTask()
  
    return () => {

    }
  }, [])
  

  return (
    <div>
      <Button
        onClick={(e) => {
          toggle();
        }}
        variant="danger"
        size="lg"
      >
        {text}
      </Button>

      {isOpen && <AddTask />}

      <TaskList />
    </div>
  );
};

export default Home;
