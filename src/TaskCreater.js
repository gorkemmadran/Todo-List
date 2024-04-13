import React from 'react'

function TaskCreater() {
  return (
    <div className='Task-Creater-area'>
      <input className='Task-Creater-input' type="text" placeholder="Birşeyler girin..." />
      <button className='Task-Creater-btn'>Task oluştur</button>
    </div>
  )
}

export default TaskCreater