import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Task({task, onDelete}) {
  const {id, text} = task;
  if(!text) return;
  const deleteTask = () => {
onDelete(id)
  }
  return (
    <div className='Task'>
      <div className='Task-text'>
        {text}
      </div>
      <div className='Task-icons'>
      <MdDelete onClick={deleteTask} className='task-icon' />
      <FaEdit className='task-icon' />
      
      </div>
    </div>
  )
}

export default Task