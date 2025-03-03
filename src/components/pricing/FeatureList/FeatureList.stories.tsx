import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./index";

const meta: Meta<typeof FeatureList> = {
  title: "Pricing/FeatureList",
  component: FeatureList,
  tags: ["autodocs"],
  argTypes: {
    features: {
      control: "object",
      description: "Array of features to display",
    },
    isHighlighted: {
      control: "boolean",
      description: "Whether the list is in a highlighted state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FeatureList>;

const sampleFeatures = [
  { name: "10 users included", included: true },
  { name: "2GB of storage", included: true },
  { name: "Email support", included: true },
  { name: "24/7 phone support", included: false },
  { name: "Custom branding", included: false },
];

export const Default: Story = {
  args: {
    features: sampleFeatures,
    isHighlighted: false,
  },
};

export const Highlighted: Story = {
  args: {
    features: sampleFeatures,
    isHighlighted: true,
  },
};

export const AllIncluded: Story = {
  args: {
    features: sampleFeatures.map((f) => ({ ...f, included: true })),
    isHighlighted: false,
  },
};

export const AllExcluded: Story = {
  args: {
    features: sampleFeatures.map((f) => ({ ...f, included: false })),
    isHighlighted: false,
  },
};
