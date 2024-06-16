import PostItem from ".";
import { fakePost } from "./__mock__/fixture";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof PostItem>;

export default {
  title: "PostItem",
  component: PostItem,
} satisfies Meta;

export const Default: Story = {
  args: {
    post: fakePost,
  },
};
