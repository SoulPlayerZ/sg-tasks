import React, { useState } from "react";
import TasksContext from "./TasksContext";

function TasksProvider ({ children }) {
  const [allTasks, setAllTasks] = useState([]);
 
const contextValue = {
  allTasks,
  setAllTasks,
};

return (
<TasksContext.Provider value={contextValue}>
    {children}
</TasksContext.Provider>
);
}

export default TasksProvider;