import { useContext, useEffect } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import ThemeContext from "../context/ThemeContext";

function MainPage () {
  const { setTheme } = useContext(ThemeContext)

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'default');
  })

  return(
    <section className={localStorage.getItem('theme') || 'default'}>
        <Header />
        <TaskList />
    </section>
  )
}

export default MainPage;