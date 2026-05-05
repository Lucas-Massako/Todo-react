import { useState } from "react"; 

function TodoForm({ AddTask }) { 
    
    const [text, setText] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
       
        if (text.trim()) { 
            console.log(`Nouvelle tâche ajoutée : ${text}`); 
            AddTask(text); 
            setText(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form"> 
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} 
                placeholder="Ajouter une tâche"
            />
            <button type="submit">Ajouter</button> 
        </form>
    );
}

export default TodoForm; 