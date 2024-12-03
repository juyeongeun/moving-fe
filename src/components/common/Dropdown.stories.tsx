import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";

import { DropdownType } from "@/constants/dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

function testSelect(value: string | number | null) {
  console.log(value);
}

export const regionDropdown: Story = {
  args: {
    type: DropdownType.REGION,
    onSelect: testSelect,
    disabled: false,
  },
};

export const serviceDropdown: Story = {
  args: {
    type: DropdownType.SERVICE,
    onSelect: testSelect,
    disabled: false,
  },
};

export const profileCustomerDropdown: Story = {
  args: {
    type: DropdownType.PROFILE_CUSTOMER,
    onSelect: testSelect,
    disabled: false,
  },
};

export const profileMoverDropdown: Story = {
  args: {
    type: DropdownType.PROFILE_MOVER,
    onSelect: testSelect,
    disabled: false,
  },
};

export const notificationDropdown: Story = {
  args: {
    type: DropdownType.NOTIFICATION,
    onSelect: testSelect,
    disabled: false,
  },
};

export const sortMoverDropdown: Story = {
  args: {
    type: DropdownType.SORT_MOVER,
    onSelect: testSelect,
    disabled: false,
  },
};

export const sortMovingRequestDropdown: Story = {
  args: {
    type: DropdownType.SORT_MOVING_REQUEST,
    onSelect: testSelect,
    disabled: false,
  },
};
