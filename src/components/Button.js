
const Button=(props)=> {

    

    
    return (
        <div>
        {!props.showadd?<button onClick={props.onClick}
        className='btn'>Add Task</button>:<button onClick={props.onClick}
        className="btnno">Close</button>}
        </div>
    )
}

export default Button;


