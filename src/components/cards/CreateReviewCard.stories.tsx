import type { Meta, StoryObj } from "@storybook/react";
import CreateReviewCard from "./CreateReviewCard";

const meta: Meta<typeof CreateReviewCard> = {
  title: "Cards/CreateReviewCard",
  component: CreateReviewCard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CreateReviewCard>;

const mockData = {
  id: 21,
  service: 0,
  isDesignated: true,
  imageUrl: "",
  nickname: "김코드",
  movingDate: "2024-11-27T10:00:00.000Z",
  cost: 210000,
};

export const Default: Story = {
  args: {
    data: mockData,
    onPrimaryClick: () => alert("리뷰 작성하기 클릭"),
  },
};

export const WithClassName: Story = {
  args: {
    data: mockData,
    className: "w-full",
    onPrimaryClick: () => alert("리뷰 작성하기 클릭"),
  },
};
