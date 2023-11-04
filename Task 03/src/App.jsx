import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>
      <TaskForm onAddTask={addTask} />
      <h2>Pending Tasks</h2>
      <TaskList tasks={tasks.filter(task => !task.completed)} onComplete={completeTask} onDelete={deleteTask} />
      <h2>Completed Tasks</h2>
      <TaskList tasks={tasks.filter(task => task.completed)} onDelete={deleteTask} />
    </div>
  );
};

export default App;
