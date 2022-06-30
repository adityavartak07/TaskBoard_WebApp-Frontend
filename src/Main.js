import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import Headers from "./components/Headers";
import AddTask from "./components/AddTask";
import Timer from "./components/Timer";
import Timer7 from "./components/Timer7";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { createTask, getTasks, deleteTask } from "./actions/tasks.js";

// import useStyles from "./styles";

const Main = () => {
  const [showadd, setShowAdd] = useState(false);
  const [task, setTask] = useState("");
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  // const { isAuthenticated } = useSelector((state) => state.isAuthenticated);
  // const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();
  // const classes = useStyles();

  //delete a task

  useEffect(() => {
    dispatch(getTasks(user?.result._id));
  }, [dispatch]);

  const onDelete = (id) => {
    console.log("delete" + " " + id);
    dispatch(deleteTask(id));
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const onToggle = (id) => {
    // setTasks(
    //   tasks.map((task) =>
    //     task.id === id ? { ...task, Reminder: !task.Reminder } : task
    //   )
    // );
  };

  const addTask = async (task) => {
    console.log("user obj ", user);
    setTask(task);
    // const id = Math.floor(Math.random() * 10000) + 1;

    // const newtask = { id, ...task };
    const data = await dispatch(createTask(task));
    console.log("data  is ", data);
  };

  const toggleadd = () => {
    setShowAdd(!showadd);
  };

  return (
    <div className="container">
      <Headers toggleadd={toggleadd} showadd={showadd} />
      {showadd ? <AddTask addTask={addTask} /> : ""}

      {tasks !== undefined && tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <h1>"You Are Done For The Day :)"</h1>
      )}
    </div>
  );
};

export default Main;
