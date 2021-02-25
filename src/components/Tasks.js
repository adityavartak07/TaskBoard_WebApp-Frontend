import React from 'react'
import EachTask from './EachTask'



const Tasks=({tasks, onDelete,onToggle})=> {
    

    return (
        <div>
          {tasks.map((task)=>(
              <EachTask key={task.id} task={task} onDelete={onDelete} onToggle={()=>onToggle(task.id)}/>
        ))}
          
            
            
        </div>
    )
}

export default Tasks
