import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    onClick: () => console.log("clicked"),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    onClick: () => console.log("clicked"),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
    onClick: () => console.log("clicked"),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
    onClick: () => console.log("clicked"),
  },
};
