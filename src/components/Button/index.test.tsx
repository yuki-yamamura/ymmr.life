import { render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  test("call a function on click", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(
      <Button type="button" onClick={mockFn}>
        click me
      </Button>
    );

    const button = screen.getByRole("button", { name: "click me" });
    await user.click(button);

    expect(mockFn).toHaveBeenCalledOnce();
  });
});
