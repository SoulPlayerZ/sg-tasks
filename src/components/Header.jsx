import { useContext } from "react";
import TaskContext from "../context/TasksContext";

function Header () {
  const { input, setInput } = useContext(TaskContext);
  
  const addTask = () => {

    console.log("aa");
  }

  const handleChange = ({ target }) => {
    setInput(target.value);
        
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
              <form>
                <label>Task Title
                  <input type="text" id="task-title" value={ input } onChange={ handleChange } required />
                </label>
                <label>Description (Optional)
                  <input type="text" id="task-description" value={ input} onChange={ handleChange } />
                </label>
                <label>Start Date
                  <input type="date" id="task-date-start" value={ input } onChange={ handleChange } />
                </label>
                <label>Ends Date
                  <input type="date" id="task-date-end" value={ input } onChange={ handleChange } />
                </label>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={addTask}>Save New Task</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
  
  export default Header;