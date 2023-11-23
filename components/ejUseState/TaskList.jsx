import React, { useState } from 'react'

const TaskList = () => {

    const [inputTask, setInputTask] = useState()
    const [task, setTask] = useState([])

    const handleTaskList = ()=>{
      const newTaskList = structuredClone(task)
      newTaskList.push(inputTask)
      setTask(newTaskList)
      setInputTask("")
    }

  return (
    <>
   
    <input onChange={(e)=>{setInputTask(e.target.value)}} value={inputTask}></input>
    <button onClick={()=>{handleTaskList()}}>Send task</button>
    
    <ul>
         {task.map((objTask)=><li>{objTask}</li>)}
    </ul>
    
    </>
  )
}

export default TaskList