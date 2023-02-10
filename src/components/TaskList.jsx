import TaskCard from "./TaskCard";



function TaskList () {

  const checkLocalStorage = localStorage.hasOwnProperty('form');
  const allTasks = JSON.parse(localStorage.getItem('form'));


  return(
    <main>
      {!checkLocalStorage ? <h1>Tem nao</h1> : 
        allTasks.map((task, index) =>  <TaskCard key={ task.title + index  } task={ task } /> )}
    </main>
  )
}

export default TaskList;