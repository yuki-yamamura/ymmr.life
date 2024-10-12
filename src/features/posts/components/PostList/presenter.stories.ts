import type { Meta, StoryObj } from "@storybook/react";

import { PostList } from "./presenter";
import { fakePosts } from "@/features/posts/api/__mock__/fakeData";

const meta = {
  component: PostList,
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    posts: fakePosts,
  },
};
