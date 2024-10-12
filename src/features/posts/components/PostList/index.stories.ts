import type { Meta, StoryObj } from "@storybook/react";

import { Component } from ".";
import { fakePosts } from "@/features/posts/api/__mock__/fakeData";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    posts: fakePosts,
  },
};
