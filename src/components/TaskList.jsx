import TaskCard from "./TaskCard";
import  "../css/taskList.css";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import CarouselContext from "../context/CarouselContext";

function TaskList () {
  const { width, setWidth } = useContext(CarouselContext);
  const carousel = useRef();

  const checkLocalStorage = localStorage.hasOwnProperty('form');
  const allTasks = JSON.parse(localStorage.getItem('form'));

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <motion.main ref={ carousel }  className="task-list" whileTap={{ cursor: "grabbing" }}>
      <motion.section className="inner-carousel" drag="x" dragConstraints={{ right: width, left: -width}}
        initial={{x: 0}}
        animate={{x: width}}
        transition={{ duration: 1 }}
      >
        {!checkLocalStorage ? <h1>Tem nao</h1> : 
          allTasks.map((task, index) =>  <TaskCard key={ task.title + index  } task={ task } /> )}
      </motion.section>
    </motion.main>
  )
}

export default TaskList;