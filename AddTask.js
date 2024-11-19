import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task">
            <input
                type="text"
                placeholder="Add a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTask;
