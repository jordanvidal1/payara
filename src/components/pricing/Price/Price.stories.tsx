import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";

const meta: Meta<typeof Price> = {
  title: "Pricing/Price",
  component: Price,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <PricingProvider>
        <Story />
      </PricingProvider>
    ),
  ],
  argTypes: {
    amount: {
      control: "number",
      description: "The monthly price amount",
    },
    isHighlighted: {
      control: "boolean",
      description: "Whether the price is highlighted",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Price>;

export const Default: Story = {
  args: {
    amount: 29,
    isHighlighted: false,
  },
};

export const Highlighted: Story = {
  args: {
    amount: 99,
    isHighlighted: true,
  },
};

export const LargeAmount: Story = {
  args: {
    amount: 499,
    isHighlighted: false,
  },
};

export const SmallAmount: Story = {
  args: {
    amount: 9,
    isHighlighted: false,
  },
};
