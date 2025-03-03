import type { Meta, StoryObj } from "@storybook/react";
import { PricingCard } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";
import { expect, within } from "@storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test if title is rendered
    const title = canvas.getByText("Starter");
    expect(title).toBeInTheDocument();

    // Test if price is rendered
    const price = canvas.getByText("$29");
    expect(price).toBeInTheDocument();

    // Test if features are rendered
    const includedFeature = canvas.getByText("10 users included");
    expect(includedFeature).toBeInTheDocument();

    // Test if non-included features are styled differently
    const nonIncludedFeature = canvas.getByText("24/7 phone support");
    expect(nonIncludedFeature).toHaveClass("feature-text-no-default");
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test if highlighted card has special styling
    const card = canvas.getByTestId("pricing-card");
    expect(card).toHaveClass("our-plan-box", "our-plan-box-focus");

    // Test if more features are included compared to Basic
    const phoneSupport = canvas.getByText("24/7 phone support");
    expect(phoneSupport).toHaveClass("feature-text-yes-highlighted");
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
