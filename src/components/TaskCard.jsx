function TaskCard ({ task }) {

  return(
    <section>
      <h2>{task.title}</h2>
      <p>{task.dateStart}</p>
      <p>{task.dateEnd}</p>
    </section>

  )
}
  
  export default TaskCard;