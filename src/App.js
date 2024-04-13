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
  return (
    <div className="App">
      <TaskCreater addTask={addTask}  />
      <TaskList onDelete={onDelete} tasks={tasks}  />
    </div>
  );
}

export default App;
