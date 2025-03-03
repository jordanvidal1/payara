import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";

const meta: Meta<typeof PricingCard> = {
  title: "Pricing/PricingCard",
  component: PricingCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <PricingProvider>
          <div className="max-w-sm">
            <Story />
          </div>
        </PricingProvider>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the pricing tier",
    },
    description: {
      control: "text",
      description: "The description of the pricing tier",
    },
    price: {
      control: "number",
      description: "The monthly price amount",
    },
    features: {
      control: "object",
      description: "Array of features included in this tier",
    },
    isHighlighted: {
      control: "boolean",
      description: "Whether this is the highlighted/featured tier",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

const sampleFeatures = [
  { name: "10 users included", included: true },
  { name: "2GB of storage", included: true },
  { name: "Email support", included: true },
  { name: "24/7 phone support", included: false },
  { name: "Custom branding", included: false },
];

export const Basic: Story = {
  args: {
    title: "Starter",
    description: "Perfect for small teams just getting started",
    price: 29,
    features: sampleFeatures,
    isHighlighted: false,
  },
};

export const Premium: Story = {
  args: {
    title: "Professional",
    description: "Everything you need for a growing business",
    price: 99,
    features: sampleFeatures.map((f, i) => ({ ...f, included: i < 4 })),
    isHighlighted: true,
  },
};

export const Enterprise: Story = {
  args: {
    title: "Enterprise",
    description: "Advanced features for large organizations",
    price: 299,
    features: sampleFeatures.map(() => ({
      ...sampleFeatures[0],
      included: true,
    })),
    isHighlighted: false,
  },
};
