import "../css/taskCard.css";

function TaskCard ({ task }) {

  return(
    <section className={`${localStorage.getItem('theme') || 'default'} task-card`}>
      <h2>{task.title}</h2>
      <section className="date-container">
        <p>{`Início: ${task.dateStart}`}</p>
        <p>{`Fim: ${task.dateEnd}`}</p>
      </section>
    </section>

  )
}
  
  export default TaskCard;