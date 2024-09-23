import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { Button } from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    children: "button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "button",
  },
};

export const Clicked: Story = {
  args: {
    children: "button",
    onClick: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const user = userEvent.setup();
    const canvas = within(canvasElement);

    await user.click(canvas.getByRole("button", { name: "button" }));

    expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export default meta;
