import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function Task() {
  return (
    <div className='Task'>
      <div className='Task-text'>
        paragraf
      </div>
      <div className='Task-icons'>
      <MdDelete className='task-icon' />
      <FaEdit className='task-icon' />
      
      </div>
    </div>
  )
}

export default Task