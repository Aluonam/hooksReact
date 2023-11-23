import React, { useState } from 'react'

const TaskList2 = () => {

    const [taskList, setTaskList] = useState([])
    const [inputData, setInputData] = useState()

    const handleTaskList = ()=>{
        const newTaskList = structuredClone(taskList)
        newTaskList.push(inputData)
        setInputData("")
        setTaskList(newTaskList)
    }

    const showList = taskList.map((actualElement)=>{
        return(
            <ul>
                <li>{actualElement}</li>
            </ul>
        )
    })
  return (
    <div>
        {showList}
        <input onChange={(e)=>{setInputData(e.target.value)}} value={inputData} placeholder='Write a task'></input>
        <button onClick={()=>{handleTaskList()}}>Send a task</button>
    </div>
  )
}

export default TaskList2