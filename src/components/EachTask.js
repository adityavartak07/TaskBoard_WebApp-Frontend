import React from "react";
import { FaTimes } from "react-icons/fa";

const EachTask = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.Reminder ? "reminder" : ""}`}
      onDoubleClick={onToggle}
    >
      <h3>
        {task.message}
        <FaTimes style={{ color: "red" }} onClick={onDelete} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default EachTask;
