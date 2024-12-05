import type { Meta, StoryObj } from "@storybook/react";
import ReceivedQuoteCard from "./ReceivedQuoteCard";

const meta = {
  title: "Cards/ReceivedQuoteCard",
  component: ReceivedQuoteCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ReceivedQuoteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = {
  id: 11,
  service: 0,
  isDesignated: true,
  imageUrl: "",
  nickname: "김기사",
  career: 4,
  introduction: "안전하고 신속한 이사를 약속드립니다.",
  ratings: {
    "1": 0,
    "2": 0,
    "3": 1,
    "4": 0,
    "5": 1,
    average: 4,
  },
  reviewCount: 7,
  confirmCount: 11,
  favoriteCount: 3,
  isFavorite: true,
  cost: 190000,
  isConfirmed: true,
};

export const Default: Story = {
  args: {
    data: mockData,
  },
};

export const WithoutDesignated: Story = {
  args: {
    data: {
      ...mockData,
      isDesignated: false,
    },
  },
};
