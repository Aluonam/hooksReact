import React, { useState } from 'react'

const TaskList = () => {

    const [taskList, setTaskList] = useState([])
  return (
    <>
    <input onChange={(e)=>{e.target.value}}></input>
    </>
  )
}

export default TaskList