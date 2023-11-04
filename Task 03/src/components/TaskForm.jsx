import React, { useState } from 'react';
import '../App.css';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your Task"
        className='taskform-input'
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <button type="submit" className='taskform-btn'>Add Task</button>
    </form>
  );
};

export default TaskForm;
