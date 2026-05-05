import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';


function App() {
  const [count, setCount] = useState(0)
  const addTask = (task) => { 
    const newTask = {id: Date.now(), text: task, completed: false};
    setTasks([...tasks, newTask]);
  };

  
  
  

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
          
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      
      <TodoForm />
     
      
    </section>
    </>
  )
}

export default App;