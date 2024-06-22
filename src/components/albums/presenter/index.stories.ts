import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { fakeAlbums } from "../__mock__/fixture";
import { expect, within } from "@storybook/test";

type Story = StoryObj<typeof Component>;

export default {
  title: "Albums",
  component: Component,
} satisfies Meta;

export const Default: Story = {
  args: {
    albums: fakeAlbums,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText("quidem molestiae enim")).toBeInTheDocument();
    expect(
      canvas.getByText("sunt qui excepturi placeat culpa")
    ).toBeInTheDocument();
    expect(canvas.getByText("omnis laborum odio")).toBeInTheDocument();
  },
};
