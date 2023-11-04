import React from "react";
import "../App.css";

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div>{task.text}</div>
      <div>
        {!task.completed && (
          <button className="taskcmp-btn" onClick={() => onComplete(task.id)}>
            Complete
          </button>
        )}
        <button className="taskdel-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
