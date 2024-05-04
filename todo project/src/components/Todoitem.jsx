
import React from 'react';
function Todoitem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
return (
<div className="todo-item">
    <input type="checkbox"checked={task.completed}onChange={handleChange}/>
    <p>{task.text}</p>
    <button  className=" but"onClick={() => deleteTask(task.id)}>X</button>
</div>
 );
}
export default Todoitem;
