import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('allows users to add, edit, and delete tasks', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Add a new task...');
  const addButton = screen.getByText('Add');

  // Add task
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);
  expect(screen.getByText('Task 1')).toBeInTheDocument();

  // Edit task
  fireEvent.click(screen.getByText('Edit'));
  const newText = 'Updated Task 1';
  fireEvent.change(screen.getByDisplayValue('Task 1'), { target: { value: newText } });
  expect(screen.getByText(newText)).toBeInTheDocument();

  // Delete task
  fireEvent.click(screen.getByText('Delete'));
  expect(screen.queryByText(newText)).toBeNull();
});

test('filters tasks correctly', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Add a new task...');
  const addButton = screen.getByText('Add');

  // Add multiple tasks
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Task 2' } });
  fireEvent.click(addButton);

  // Mark "Task 1" as completed
  const checkboxes = screen.getAllByRole('checkbox');
  fireEvent.click(checkboxes[0]);

  // Filter Completed
  fireEvent.click(screen.getByText('Completed'));
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.queryByText('Task 2')).toBeNull();

  // Filter Pending
  fireEvent.click(screen.getByText('Pending'));
  expect(screen.getByText('Task 2')).toBeInTheDocument();
  expect(screen.queryByText('Task 1')).toBeNull();
});
