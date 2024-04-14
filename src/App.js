import './App.css';
import TaskCreater from './TaskCreater';
import TaskList from './TaskList';
import { useEffect, useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  
  const onDelete = (id) =>{
    setTasks(tasks.filter(task =>task.id !== id))
  }
  const onUpdate = (newTodo) =>{
    const request = tasks.map(task =>{
      if(task.id !== newTodo.id){
        return task
      }
      return newTodo
    })
    setTasks([...request])
  }
  return (
    <div className="App">
      <TaskCreater addTask={addTask}  />
      <TaskList onUpdate={onUpdate} onDelete={onDelete} tasks={tasks}  />
    </div>
  );
}

export default App;
