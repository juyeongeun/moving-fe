import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof SearchInput>;

// 기본 Input 스토리
export const DefaultSmall: Story = {
  args: {
    name: "default-input-small",
    placeholder: "Enter text here...",
    width: "375px",
    height: "52px",
    leftMargin: "16px",
  },
};

export const DefaultLarge: Story = {
  args: {
    name: "default-input-large",
    placeholder: "Enter text here...",
    width: "560px",
    height: "64px",
    leftMargin: "24px",
  },
};
