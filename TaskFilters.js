import React from 'react';

const TaskFilters = ({ filter, setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('All')} disabled={filter === 'All'}>All</button>
      <button onClick={() => setFilter('Completed')} disabled={filter === 'Completed'}>Completed</button>
      <button onClick={() => setFilter('Pending')} disabled={filter === 'Pending'}>Pending</button>
    </div>
  );
};

export default TaskFilters;
