import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, editTask, deleteTask }) => {
  const handleEdit = (id) => {
    const newText = prompt('Edit task:', tasks.find(task => task.id === id)?.text);
    if (newText) editTask(id, newText);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          {task.text}
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
