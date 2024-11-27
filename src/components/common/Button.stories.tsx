import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const handleClick = () => console.log("clicked");

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "기본 버튼",
    onClick: handleClick,
  },
};

export const OutlinedButton: Story = {
  args: {
    variant: "outlined",
    children: "아웃라인 버튼",
    onClick: handleClick,
  },
};
