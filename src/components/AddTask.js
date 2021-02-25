import React from 'react'
import {useState} from 'react'

const AddTask = ({addTask}) => {
    const [Task, setTask] = useState('')
    const [Day, setDay] = useState('')
    const [Reminder, setReminder] = useState(false)
    
    


    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!Task){
            alert("Add a task, Sir !!!")
        }


       addTask({Task, Day, Reminder})

       setTask('');
       setDay('');
       setReminder(false);

    }






    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Task</label>
            <input type="text" placeholder="Add a Task" value={Task} onChange={e=>setTask(e.target.value)}></input>

            </div>
            <div className="form-group">
            <label>Day & Time</label>
            <input type="text"  value={Day} onChange={e=>setDay(e.target.value)}
             placeholder="Add Day & Time"></input>

            </div>
            <div className="form-group">
            <label>Set Reminder</label>
            
            <input type="checkbox" 
            value={Reminder} onChange={e=>setReminder(e.currentTarget.checked)}></input>



            </div>
            <input className="btn btn-block" type="submit" value="save task"></input>

        </form>
    )
}

export default AddTask
