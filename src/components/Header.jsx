import { useContext } from "react";
import TaskContext from "../context/TasksContext";

function Header () {
  const { inputs, setInputs } = useContext(TaskContext);

  const handleChange = ({ target }) => {
    const value = {...inputs, [target.name]: target.value};
    setInputs(value);
  }
  
  const addTask = (e) => {
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
      dataStart: '',
      dataEnd: '',
    })
  }
  
  return(
    <header>
      <h1>SG Tasks</h1>
      <label>
        <select>
            <option value="op1">op1</option>
            <option value="op2">op2</option>
            <option value="op3">op3</option>
        </select>
      </label>

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
                <label>Task Title
                  <input type="text" name="title" onChange={handleChange} value={ inputs.title } required />
                </label>
                <label>Start Date
                  <input type="date" name="dataStart" onChange={handleChange} value={ inputs.dataStart } required />
                </label>
                <label>Ends Date
                  <input type="date" name="dataEnd" onChange={handleChange} value={ inputs.dataEnd } required />
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