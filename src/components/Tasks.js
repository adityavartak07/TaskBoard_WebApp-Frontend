import React from "react";
import EachTask from "./EachTask";
import { useSelector, useDispatch } from "react-redux";

const Tasks = ({ onDelete, onToggle }) => {
  const { tasks, isLoading } = useSelector((state) => state.tasks);
  console.log("tasks are ", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <EachTask
          key={task._id}
          task={task}
          onDelete={() => onDelete(task._id)}
          onToggle={() => onToggle(task._id)}
        />
      ))}
    </div>
  );
};

export default Tasks;
