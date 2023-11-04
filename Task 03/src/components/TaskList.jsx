import React from 'react';
import Task from './Task';
import '../App.css'

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
