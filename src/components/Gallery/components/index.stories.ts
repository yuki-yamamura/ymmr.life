import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./presenter";
import { data } from "../__mocks__/data";

const meta = {
  title: "Gallery",
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photos: data,
  },
};
