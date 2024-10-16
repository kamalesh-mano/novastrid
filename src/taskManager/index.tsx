
import { useEffect } from 'react';
import { TaskStore } from '../store';
import './task-manager.css';
import NewTask from './newTask';
import TaskViewer from './taskViewer';
import TaskFilter from './taskFilter';

function TaskManager() {
  const {taskData} = TaskStore();
  useEffect(() =>{
console.log('task from store', taskData)
  },[taskData])
  return (
    <div className="taskManager">
      <NewTask />
      <TaskFilter />
      <TaskViewer />
    </div>
  );
}

export default TaskManager;
