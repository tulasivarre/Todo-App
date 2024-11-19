import React from "react";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? "completed" : ""}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) => onEdit(task.id, e.target.textContent)}
                    >
                        {task.name}
                    </span>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
