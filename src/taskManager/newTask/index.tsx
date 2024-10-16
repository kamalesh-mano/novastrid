import { useState } from "react";
import "./new-task.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { TaskStore } from "../../store";
import { StatusI } from "../../type";

const NewTask = () => {
    const{addTask} = TaskStore()
    const [newTaskName,setNewTaskName] = useState<string>("")
    const createTask = () => {
        addTask(newTaskName,StatusI.UNCOMPLETED)
    }
    return (
        <div className="newTask">
            <div className="taskName"><TextField label="Task Name"
            placeholder="Enter task name" variant="standard"
            value={newTaskName}
            onChange={(e) =>{
                setNewTaskName(e.target.value)
            }} /></div>
            <div className="create"><Button variant="outlined" disabled={newTaskName.length <=0} onClick={createTask}>Create New Task</Button>
            </div>


        </div>
    )
}

export default NewTask;
