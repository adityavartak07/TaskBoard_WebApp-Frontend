import React from 'react'
import {FaTimes} from 'react-icons/fa';

const EachTask=({task, onDelete, onToggle})=> {
    return (
        <div className={`task ${task.Reminder?'reminder':''}`} onDoubleClick={onToggle}>
        <h3>{task.Task}<FaTimes style={{color:'red'}} onClick={()=>onDelete(task.id)}/>

        </h3>
        <p>{task.Day}</p>
            
        </div>
    )
}

export default EachTask
