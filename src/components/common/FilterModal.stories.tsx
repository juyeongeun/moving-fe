import FilterModal from "@/components/common/FilterModal";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FilterModal> = {
  title: "Components/FilterModal",
  component: FilterModal,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

// 기본 이사 유형 필터
export const Default: Story = {
  args: {
    moveCount: [100, 30, 40, 30],
    filterCount: [80, 50, 30],
  },
};

// 이사 건수가 없는 경우
export const NoMoves: Story = {
  args: {
    moveCount: [0, 0, 0, 0],
    filterCount: [0, 0, 0],
  },
};
