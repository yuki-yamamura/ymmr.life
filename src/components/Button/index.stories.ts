import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
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
