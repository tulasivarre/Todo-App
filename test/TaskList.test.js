import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";

test("toggles task completion", () => {
    const mockToggle = jest.fn();
    const tasks = [{ id: 1, name: "Test Task", completed: false }];

    render(<TaskList tasks={tasks} onToggle={mockToggle} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockToggle).toHaveBeenCalledWith(1);
});
