import PostItem from "./";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof PostItem>;

export default {
  title: "PostItem",
  component: PostItem,
} satisfies Meta;

export const Default: Story = {
  args: {
    post: {
      title: "Hello, World!",
      body: "Some text here...",
    },
  },
};
