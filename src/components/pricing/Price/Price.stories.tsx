import type { Meta, StoryObj } from "@storybook/react";
import { Price } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { expect, within, waitFor } from "@storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // Test if price is rendered correctly
      const price = canvas.getByText("$29");
      expect(price).toBeInTheDocument();
      expect(price).toHaveClass("price-amount", "price-amount-default");

      // Test if billing period is rendered
      const period = canvas.getByText("/ Month");
      expect(period).toBeInTheDocument();
      expect(period).toHaveClass("price-period", "price-period-default");
    });
  },
};

export const Highlighted: Story = {
  args: {
    amount: 99,
    isHighlighted: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // Test if price is rendered with highlighted styling
      const price = canvas.getByText("$99");
      expect(price).toBeInTheDocument();
      expect(price).toHaveClass("price-amount", "price-amount-highlighted");

      // Test if billing period is highlighted
      const period = canvas.getByText("/ Month");
      expect(period).toBeInTheDocument();
      expect(period).toHaveClass("price-period", "price-period-highlighted");
    });
  },
};

export const LargeAmount: Story = {
  args: {
    amount: 499,
    isHighlighted: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // Test if large price is rendered correctly
      const price = canvas.getByText("$499");
      expect(price).toBeInTheDocument();
      expect(price).toHaveClass("price-amount", "price-amount-default");
    });
  },
};

export const SmallAmount: Story = {
  args: {
    amount: 9,
    isHighlighted: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(() => {
      // Test if small price is rendered correctly
      const price = canvas.getByText("$9");
      expect(price).toBeInTheDocument();
      expect(price).toHaveClass("price-amount", "price-amount-default");
    });
  },
};
