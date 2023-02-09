import React, { useState } from "react";
import TasksContext from "./TasksContext";

function TasksProvider ({ children }) {
  const [allTasks, setAllTasks] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [input, setInput] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDateStart, setInputDateStart] = useState('');
  const [inputDateEnd, setInputDateEnd] = useState('');
 
const contextValue = {
  allTasks,
  setAllTasks,
  inputTitle,
  setInputTitle,
  inputDescription,
  setInputDescription,
  inputDateStart,
  setInputDateStart,
  inputDateEnd,
  setInputDateEnd,
  input,
  setInput,
};

return (
<TasksContext.Provider value={contextValue}>
    {children}
</TasksContext.Provider>
);
}

export default TasksProvider;