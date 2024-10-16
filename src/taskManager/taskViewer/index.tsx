import { useEffect, useState } from "react";
import { TaskStore } from "../../store";
import { FilterStatus, StatusI, TaskI } from "../../type";
import "./task-viewer.css"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const TaskViewer = () => {
    const {taskData,changeTaskStatus,deleteTask,filterStatus} = TaskStore();
    const [localTaskData,setLocalTaskData] = useState<TaskI[] | undefined>(undefined)
    
    useEffect(() =>{
        if(taskData){
            if(filterStatus === FilterStatus.SHOWALL){
                setLocalTaskData(taskData)
            }
            else {
                const filteredTask = taskData.filter((task) => task.status == filterStatus as string);
            setLocalTaskData(filteredTask)
            }
        }
    },[taskData,filterStatus])
    return(
        <div className="container">
            {localTaskData && localTaskData.length >0 ? <div className="taskViewer">
                {localTaskData.map((task, index) => (  
                    <div key={index} className="individualTask">
                        <div> <Checkbox
      checked={task.status === StatusI.COMPLETED}
      onChange={(e)=>{
        changeTaskStatus(task.taskId,e.target.checked)
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    /></div>
                        <div className="taskName">{task.taskName}</div>
                        <div className="status">{task.status}</div>
                        <div><Button variant="outlined"
                        sx={{
                            border:'2px solid red',
                            color:"red",
                            width:"20px",
                            height:"17.5px",
                            fontSize:"10px"
                        }} onClick={()=>{
                            deleteTask(task.taskId)
                        }}>Delete</Button></div>
                    </div>
            ))}  
            </div> : <div>No Task</div>}
        </div>
    )
}
export default TaskViewer;