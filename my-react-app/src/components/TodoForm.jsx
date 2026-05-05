import { use, useState } from "react";

function TodoForm(AddTask) 
{
   
    const [task, setTask] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();
    AddTask(task);
    setTask("");
  };
    return(
       <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="new task" 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
           
        </form>
    );
}
export default TodoForm;