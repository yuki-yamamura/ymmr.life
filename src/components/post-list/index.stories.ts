import PostList from ".";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof PostList>;

export default {
  title: "PostList",
  component: PostList,
} satisfies Meta;

export const Default: Story = {
  args: {
    posts: [
      {
        title: "First post",
        body: "Some text here...",
      },
      {
        title: "Second post",
        body: "Some text here...",
      },
      {
        title: "Third post",
        body: "Some text here...",
      },
    ],
  },
};
