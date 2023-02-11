import "../css/taskCard.css";

function TaskCard ({ task }) {

  return(
    <section className="task-card">
      <h2>{task.title}</h2>
      <p>{task.dateStart}</p>
      <p>{task.dateEnd}</p>
    </section>

  )
}
  
  export default TaskCard;