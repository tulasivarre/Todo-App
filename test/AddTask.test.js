import { render, screen, fireEvent } from "@testing-library/react";
import AddTask from "../components/AddTask";

test("allows user to add a task", () => {
    const mockAdd = jest.fn();
    render(<AddTask onAdd={mockAdd} />);

    const input = screen.getByPlaceholderText("Add a task");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(mockAdd).toHaveBeenCalledWith("New Task");
});
