import AddressField from "./AddressField";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AddressField> = {
  title: "Components/AddressField",
  component: AddressField,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddressField>;

export default meta;
type Story = StoryObj<typeof AddressField>;

export const Default: Story = {
  args: {
    zipCode: "12345",
    roadAddress: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
    streetAddress: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
  },
};

export const Selected: Story = {
  args: {
    zipCode: "12345",
    roadAddress: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
    streetAddress: "서울특별시 강남구 테헤란로 14길 6 남도빌딩",
    selected: true,
  },
};
