import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Task({task}) {
  const {id, text} = task;
  if(!text) return;
  console.log(id,text)
  return (
    <div className='Task'>
      <div className='Task-text'>
        {text}
      </div>
      <div className='Task-icons'>
      <MdDelete className='task-icon' />
      <FaEdit className='task-icon' />
      
      </div>
    </div>
  )
}

export default Task