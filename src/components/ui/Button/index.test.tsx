import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe("Button", () => {
  it("calls an event handler when the button is clicked", async () => {
    const user = userEvent.setup();
    const mockFn = vi.fn();
    render(<Button onClick={mockFn}>button</Button>);

    const button = screen.getByRole("button", { name: "button" });
    await user.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
