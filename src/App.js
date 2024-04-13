import './App.css';
import TaskCreater from './TaskCreater';
import TaskList from './TaskList';
import { useEffect, useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  }
  
  return (
    <div className="App">
      <TaskCreater addTask={addTask}  />
      <TaskList tasks={tasks}  />
    </div>
  );
}

export default App;
