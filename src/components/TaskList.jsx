import TaskCard from "./TaskCard";
import  "../css/taskList.css";
import { motion } from "framer-motion";

function TaskList () {

  const checkLocalStorage = localStorage.hasOwnProperty('form');
  const allTasks = JSON.parse(localStorage.getItem('form'));


  return(
    <motion.main className="task-list" whileTap={{ cursor: "grabbing" }}>
      <motion.section className="inner-carousel" drag="x">
        {!checkLocalStorage ? <h1>Tem nao</h1> : 
          allTasks.map((task, index) =>  <TaskCard key={ task.title + index  } task={ task } /> )}
      </motion.section>
    </motion.main>
  )
}

export default TaskList;