import type { Meta, StoryObj } from "@storybook/react";
import ProfileImage from "./ProfileImage";

const meta = {
  title: "Common/ProfileImage",
  component: ProfileImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof ProfileImage>;

export const Default: Story = {
  args: {
    imgUrl: "https://picsum.photos/200",
  },
};

export const WithoutImage: Story = {
  args: {
    imgUrl: null,
  },
};

export const CustomSize: Story = {
  args: {
    imgUrl: "https://picsum.photos/200",
    className: "w-20 h-20",
  },
};
