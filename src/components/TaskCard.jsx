import "../css/taskCard.css";
import { motion } from "framer-motion";


function TaskCard ({ task }) {

  return(
    <motion.section className="default task-card">
      <h2>{task.title}</h2>
      <section className="date-container">
        <p>{`Início: ${task.dateStart}`}</p>
        <p>{`Fim: ${task.dateEnd}`}</p>
      </section>
    </motion.section>

  )
}
  
  export default TaskCard;