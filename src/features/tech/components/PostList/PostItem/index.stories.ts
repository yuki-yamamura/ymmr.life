import type { Meta, StoryObj } from "@storybook/react";

import { PostItem } from ".";
import { fakePosts } from "@/features/tech/api/__mock__/fakeData";

const meta = {
  component: PostItem,
} satisfies Meta<typeof PostItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: fakePosts[0],
  },
};
