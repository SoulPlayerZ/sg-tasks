import React, { useState } from "react";
import TasksContext from "./TasksContext";

function TasksProvider ({ children }) {
  const [inputs, setInputs ] = useState({
    title: '',
    dateStart: '',
    dateEnd: '',
  });
  
  const contextValue = {
    inputs, setInputs,
  };

return (
<TasksContext.Provider value={contextValue}>
    {children}
</TasksContext.Provider>
);
}

export default TasksProvider;