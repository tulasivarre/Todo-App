import React from "react";

const FilterTasks = ({ filter, setFilter }) => {
    return (
        <div className="filter-tasks">
            <button
                className={filter === "All" ? "active" : ""}
                onClick={() => setFilter("All")}
            >
                All
            </button>
            <button
                className={filter === "Completed" ? "active" : ""}
                onClick={() => setFilter("Completed")}
            >
                Completed
            </button>
            <button
                className={filter === "Pending" ? "active" : ""}
                onClick={() => setFilter("Pending")}
            >
                Pending
            </button>
        </div>
    );
};

export default FilterTasks;
