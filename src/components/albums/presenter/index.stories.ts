import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";
import { fakeAlbums } from "../__mock__/fixture";

type Story = StoryObj<typeof Component>;

export default {
  title: "Albums",
  component: Component,
} satisfies Meta;

export const Default: Story = {
  args: {
    albums: fakeAlbums,
  },
};
