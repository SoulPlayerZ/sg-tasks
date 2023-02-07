function Header () {
  return(
    <header>
      <h1>SG Tasks</h1>
      <label htmlFor="theme" className={`select is-link` }>
        <select>
            <option value="op1">op1</option>
            <option value="op2">op2</option>
            <option value="op3">op3</option>
        </select>
      </label>
      <button>Add New Task</button>
    </header>
  )
}
  
  export default Header;