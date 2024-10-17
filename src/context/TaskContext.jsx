import { createContext, useEffect, useState } from "react"
import { tasks as data } from "./../data/task"

export const TaskContext = createContext()

export function TaskContextProvider(props){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task){
        task.id = tasks.length
        setTasks([...tasks, task])
      }
    
      function deleteTask(id){
        setTasks(tasks.filter(task => task.id != id))
      }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
