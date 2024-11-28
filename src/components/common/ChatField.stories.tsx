import { Meta, StoryObj } from "@storybook/react";
import ChatField from "./ChatField";

const meta: Meta<typeof ChatField> = {
  title: "Components/ChatField",
  component: ChatField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatField>;

export default meta;
type Story = StoryObj<typeof ChatField>;

// 기본 Input 스토리
export const DefaultSmall: Story = {
  args: {
    radius: "24px",
    value: "Hello, world!",
    variant: "default",
  },
};

export const DefaultLarge: Story = {
  args: {
    radius: "30px",
    value: "Hello, world!",
    variant: "default",
  },
};

export const PrimarySmall: Story = {
  args: {
    radius: "24px",
    value: "Hello, world!",
    variant: "primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    radius: "30px",
    value: "Hello, world!",
    variant: "primary",
  },
};

export const SecondarySmall: Story = {
  args: {
    radius: "24px",
    value: "Hello, world!",
    variant: "secondary",
  },
};

export const SecondaryLarge: Story = {
  args: {
    radius: "30px",
    value: "Hello, world!",
    variant: "secondary",
  },
};
