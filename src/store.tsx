import { Children, createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react"
import { FilterStatus, StatusI, TaskI } from "./type"
import axios from "axios"
interface TaskStoreI {
    taskData:TaskI[] | undefined,
    setTaskData:React.Dispatch<React.SetStateAction<TaskI[] | undefined>>,
    addTask:(taskName:string,status:StatusI) => void;
    changeTaskStatus:(taskId:string,checked:boolean) => void;
    deleteTask:(taskId:string) =>void;
    filterStatus:FilterStatus;
    setFilterStatus:React.Dispatch<React.SetStateAction<FilterStatus>>
}
const TaskContext = createContext<TaskStoreI>({
    taskData:[],
    setTaskData:() =>{},
    addTask:() =>{},
    changeTaskStatus:() =>{},
    deleteTask:() => {},
    filterStatus:FilterStatus.SHOWALL,
    setFilterStatus:() => {},

})

const TaskStoreProvider = ({children}:{children:ReactNode}) => {
    const [taskData,setTaskData]= useState<TaskI[] | undefined>(undefined)
    const [filterStatus,setFilterStatus] = useState<FilterStatus>(FilterStatus.SHOWALL)
    useEffect(() => {
        axios.get('/task.json').then((res) => setTaskData(res.data.data)).catch((e) => console.log('error', e))
    },[])

    const addTask = (taskName:string,status:StatusI):void=> {
        const generatedTaskId ="task" + taskName + Date.now()
        setTaskData((prev)=>{
            if(prev){
            const prevData = [...prev]
            prevData.push({
                taskName,
                status,
                taskId:generatedTaskId
            })
            return prevData
        }
            return []
        })
    }
    const changeTaskStatus =(taskId:string,checked:boolean):void =>{
        if(taskData){
            const shallowArray = [...taskData]
            for(var task in shallowArray){
                if(shallowArray[task].taskId === taskId){
                    if(checked){
                       shallowArray[task].status =StatusI.COMPLETED 
                    }
                    else {
                        shallowArray[task].status =StatusI.UNCOMPLETED
                    }
                }
            }
            return setTaskData(shallowArray)
        }

    }

    const deleteTask = (taskId:string) =>{
        if(taskData){
            const filteredTask = taskData.filter((task) => task.taskId !== taskId);
            setTaskData(filteredTask)
        }


    }
    return(
        <TaskContext.Provider value ={{taskData,setTaskData,addTask,changeTaskStatus,deleteTask,filterStatus,setFilterStatus}}>{children}</TaskContext.Provider>
    )
}

const TaskStore = () => {
    const context = useContext(TaskContext)
    if(context === undefined){
        console.log('children must be wrapped inside provider')
    }
    return context
}

export {TaskContext,TaskStore,TaskStoreProvider}