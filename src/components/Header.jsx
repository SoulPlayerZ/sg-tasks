import { useContext } from "react";
import TaskContext from "../context/TasksContext";
import "../css/header.css";

function Header () {
  const { inputs, setInputs } = useContext(TaskContext);

  const handleChange = ({ target }) => {
    const value = {...inputs, [target.name]: target.value};
    setInputs(value);
  }
  
  const addTask = () => {
    let tasks = [];
    if (localStorage.hasOwnProperty('form')) {
      tasks = JSON.parse(localStorage.getItem('form'));
      tasks.push(inputs);
      localStorage.setItem('form', JSON.stringify(tasks));
    }else {
      tasks.push(inputs);
      localStorage.setItem('form', JSON.stringify(tasks));
    }
    setInputs({
      title: '',
      dateStart: '',
      dateEnd: '',
    })
  }
  
  return(
    <header>
      <label className="theme-label">Theme:
        <select className="theme-select" >
            <option value="Default">Default</option>
            <option value="op2">op2</option>
            <option value="op3">op3</option>
        </select>
      </label>
      <h1>SG Tasks</h1>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Task
      </button>

      {/* Modal With BootStrap */} 
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Task</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={addTask}>
                <label className="task-text">Task Title
                  <input type="text" name="title" onChange={handleChange} value={ inputs.title } required />
                </label>
                <label className="task-text">Start Date
                  <input type="date" name="dateStart" onChange={handleChange} value={ inputs.dateStart } required />
                </label>
                <label className="task-text">End Date
                  <input type="date" name="dateEnd" onChange={handleChange} value={ inputs.dateEnd } required />
                </label>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" className="btn btn-primary" >Save New Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
  
  export default Header;