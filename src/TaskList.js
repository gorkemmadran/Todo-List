import React from 'react'
import Task from './Task'

function TaskList({tasks, onDelete, onUpdate}) {
  return(
    <div>
      {tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate}/>)}
    </div>
  )
}

export default TaskList