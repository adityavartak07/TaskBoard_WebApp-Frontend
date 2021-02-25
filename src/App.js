
import './App.css';
import Headers from './components/Headers'
import Tasks from './components/Tasks'
import { useState } from 'react';
import AddTask from './components/AddTask'
import Timer from './components/Timer'
import Timer7 from './components/Timer7'
import  NavBar  from './components/Navbar';
import  { Switch, Route, Redirect } from 'react-router-dom';
import Timer15 from './components/Time15';






function App() {
  const [showadd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 0,
      Task: "Aditya Vartak",
      Day: "12 August",

      Reminder: "true"




    },
    {
      id: 1,
      Task: "Rutvik Choudhari",
      Day: "12 april",

      Reminder: "true"




    }

  ])


  //delete a task

  const onDelete = (id) => {
    console.log("delete" + " " + id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const onToggle = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, Reminder: !task.Reminder } : task
    ))
  }

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask = { id, ...task }
    setTasks([...tasks, newtask])

  }

  const toggleadd = () => {
    setShowAdd(!showadd)
  }






  return (

    <div className="container">

      <Headers toggleadd={toggleadd} showadd={showadd} />
      <NavBar/>
        <Switch>
        <Route path="/startwork" component={Timer}></Route>
        <Route path="/short" component={Timer7}></Route>
        <Route path="/long" component={Timer15}></Route>
        
        
        
        </Switch>
    
      {showadd ? <AddTask addTask={addTask} /> : ''}
     
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} /> : <h1>"You Are Done For The Day :)"</h1>}


    </div>
  );
}

export default App;
