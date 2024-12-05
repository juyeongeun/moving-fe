import type { Meta, StoryObj } from "@storybook/react";
import DropdownRegion from "./DropdownRegion";

const meta: Meta<typeof DropdownRegion> = {
  title: "Components/dropdows/DropdownRegion",
  component: DropdownRegion,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark-gray",
      values: [
        { name: "dark-gray", value: "#333333" },
        { name: "white", value: "#ffffff" },
      ],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownRegion>;

export default meta;
type Story = StoryObj<typeof DropdownRegion>;

function printDropdownRegionCode(regionCode: number): void {
  console.log("지역 코드 :", regionCode);
}

export const base: Story = {
  args: {
    onSelect: printDropdownRegionCode,
  },
};
