import type { Meta, StoryObj } from "@storybook/react";

import { Link } from ".";

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/blog",
    children: "Link to blog page",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    children: "Link to example.com",
  },
};
