import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';


function Task({task, onDelete, onUpdate}) {
  const [editable, setEditable] = useState(false)
  const [newValue, setNewValue ] = useState(task.text)

  const {id, text} = task;


  if(!text) return;
  const deleteTask = () => {
  onDelete(id)
  }
  const checkClick = () =>{
    const request ={
      id,
      text: newValue
    }
  onUpdate(request);
  setEditable(false)
}
  return (
    <div className='Task'>
      <div className='Task-text'>
{
  editable ? <input onChange={e => setNewValue(e.target.value)} value={newValue} type='text' className='Task-edit-input'/> : text
}      </div>
      <div className='Task-icons'>
      <MdDelete onClick={deleteTask} className='task-icon' />
{
  editable ? <FaCheck onClick={checkClick}  className='task-icon'/> :  <FaEdit onClick={() => setEditable(true)} className='task-icon' />

}
      </div>
    </div>
  )
}

export default Task