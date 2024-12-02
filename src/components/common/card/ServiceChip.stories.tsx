import type { Meta, StoryObj } from "@storybook/react";
import ServiceChip from "./ServiceChip";

const meta = {
  title: "Components/Common/ServiceChip",
  component: ServiceChip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ServiceChip>;

export default meta;
type Story = StoryObj<typeof ServiceChip>;

export const Default: Story = {
  args: {
    variant: "smallMove",
    isResponsive: false,
  },
};

// 모든 variants를 한번에 보여주는 story
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ServiceChip variant="smallMove" isResponsive={false} />
      <ServiceChip variant="homeMove" isResponsive={false} />
      <ServiceChip variant="officeMove" isResponsive={false} />
      <ServiceChip variant="designatedQuote" isResponsive={false} />
      <ServiceChip variant="pendingConfirm" isResponsive={false} />
    </div>
  ),
};
