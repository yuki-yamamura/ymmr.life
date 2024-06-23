import { expect, within } from "@storybook/test";
import Component from ".";

import type { Meta, StoryObj } from "@storybook/react";
import { posts } from "@/mocks/fakeData/posts";

type Story = StoryObj<typeof Component>;

const meta: Meta = {
  title: "PostList",
  component: Component,
};

export default meta;

export const Default: Story = {
  args: {
    posts,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(
      canvas.getByRole("heading", { name: "First post" })
    ).toBeInTheDocument();
    expect(
      canvas.getByRole("heading", { name: "Second post" })
    ).toBeInTheDocument();
    expect(
      canvas.getByRole("heading", { name: "Third post" })
    ).toBeInTheDocument();
  },
};
