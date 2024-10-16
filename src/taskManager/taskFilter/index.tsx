import "./task-filter.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { TaskStore } from '../../store';
import { FilterStatus } from "../../type";
import { Typography } from "@mui/material";

const TaskFilter = () =>{
    const{filterStatus,setFilterStatus} = TaskStore()
    return(
        <div>
             <FormGroup sx={{
              display:"flex",
              flexDirection:'row',
             }}> 
      <FormControlLabel control={<Checkbox checked={filterStatus === FilterStatus.SHOWALL} sx={{
        color:'#2979ff',
        transform: "scale(0.75)"
      }} onChange={() =>{
        setFilterStatus(FilterStatus.SHOWALL)
      }}  />} label={<Typography style={{ color: '#2979ff', fontSize:"10px" }}>SHOWALL</Typography>} />
      <FormControlLabel control={<Checkbox checked={filterStatus === FilterStatus.COMPLETED} sx={{
        color:'green',
        transform: "scale(0.75)"
      }} onChange={() =>{
        setFilterStatus(FilterStatus.COMPLETED)
        
      }}  />} label={<Typography style={{ color: 'green', fontSize:"10px" }}>COMPLETED</Typography>} /> 
      <FormControlLabel  control={<Checkbox sx={{
        color:'red',
        transform: "scale(0.75)"
      }} checked={filterStatus === FilterStatus.UNCOMPLETED} onChange={() =>{
        setFilterStatus(FilterStatus.UNCOMPLETED)
      }}  />} label={<Typography style={{ color: 'red', fontSize:"10px" }}>COMPLETED</Typography>} />
    </FormGroup>
        </div>
    )
}

export default TaskFilter