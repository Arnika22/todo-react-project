import { Component, useState } from "react";
import Todoitem from "./Todoitem"
function Todolist() {
    const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctor Appointment',
    completed: true
    },
    {
    id: 2,
    text: 'Meeting at School',
    completed: false
    },
    {
    id: 3,
    text: 'Study Time',
    completed: false
    }
    ]);
    
    const [text, setText] = useState('');
    function addTask(text) {
    const newTask = {
    id: Date.now(),
    text,
    completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
    }
   function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
    }
   function toggleCompleted(id) {
    setTasks(tasks.map(task => {
    if (task.id === id) {
    return {...task, completed: !task.completed};
    } else {
    return task;
    } 
    }));
    }
   return (
    <div className="todo-list">
    <h1 className="head">TodoList</h1>
    {tasks.map(task => (
    <Todoitem
    key={task.id} 
    task={task}
    deleteTask={deleteTask}
    toggleCompleted={toggleCompleted} 
    />
    ))}
   <input className="int"
    value={text}
    onChange={e => setText(e.target.value)} 
    />
   <button className="but1"  onClick={() => addTask(text)}>Add</button>
    </div>
    );
   }
   export default Todolist;
   