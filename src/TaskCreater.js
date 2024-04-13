import React from 'react'
import { useState } from 'react'

function TaskCreater({addTask}) {
  const [inputVal, setInputVal] = useState('')
  const buttonClicked = (e) =>{
  addTask({
    id: Math.floor(Math.random() * 1000),
    text: inputVal
  })
  setInputVal('')
  }
  return (
    <div className='Task-Creater-area'>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} className='Task-Creater-input' type="text" placeholder="Birşeyler girin..." />
      <button onClick={buttonClicked} className='Task-Creater-btn'>Task oluştur</button>
    </div>
  )
}

export default TaskCreater