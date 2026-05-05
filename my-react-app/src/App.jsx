import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])

  const addTask = (taskText) => { 
    const newTask = { id: Date.now(), text: taskText, completed: false }
    setTasks([...tasks, newTask])
  }

  const clearTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const trueTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        <div>
          <h1>Get started</h1>
          <TodoForm AddTask={addTask} />
          <TodoList 
            tasks={tasks} 
            ClearTask={clearTask} 
            TrueTask={trueTask} 
          />
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App