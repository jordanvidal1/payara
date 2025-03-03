import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./index";
import { expect, within } from "@storybook/test";

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test included features
    const includedFeature = canvas.getByText("10 users included");
    expect(includedFeature).toBeInTheDocument();
    expect(includedFeature).toHaveClass("feature-text-yes-default");

    // Test excluded features
    const excludedFeature = canvas.getByText("Custom branding");
    expect(excludedFeature).toBeInTheDocument();
    expect(excludedFeature).toHaveClass("feature-text-no-default");

    // Test icons
    const icons = canvas.getAllByTestId(/icon/);
    expect(icons).toHaveLength(sampleFeatures.length);

    // Test first icon (included)
    const firstIcon = icons[0];
    expect(firstIcon).toHaveClass("feature-icon", "feature-icon-yes-default");

    // Test last icon (not included)
    const lastIcon = icons[icons.length - 1];
    expect(lastIcon).toHaveClass("feature-icon", "feature-icon-no-default");
  },
};

export const Highlighted: Story = {
  args: {
    features: sampleFeatures,
    isHighlighted: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test included features with highlighted styling
    const includedFeature = canvas.getByText("10 users included");
    expect(includedFeature).toBeInTheDocument();
    expect(includedFeature).toHaveClass("feature-text-yes-highlighted");

    // Test excluded features with highlighted styling
    const excludedFeature = canvas.getByText("Custom branding");
    expect(excludedFeature).toBeInTheDocument();
    expect(excludedFeature).toHaveClass("feature-text-no-highlighted");
  },
};

export const AllIncluded: Story = {
  args: {
    features: sampleFeatures.map((f) => ({ ...f, included: true })),
    isHighlighted: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that all features are included
    const features = canvas.getAllByRole("listitem");
    features.forEach((feature) => {
      const text = feature.querySelector("span");
      const icon = feature.querySelector("svg");
      expect(text).toHaveClass("feature-text-yes-default");
      expect(icon).toHaveClass("feature-icon", "feature-icon-yes-default");
    });
  },
};

export const AllExcluded: Story = {
  args: {
    features: sampleFeatures.map((f) => ({ ...f, included: false })),
    isHighlighted: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that all features are excluded
    const features = canvas.getAllByRole("listitem");
    features.forEach((feature) => {
      const text = feature.querySelector("span");
      const icon = feature.querySelector("svg");
      expect(text).toHaveClass("feature-text-no-default");
      expect(icon).toHaveClass("feature-icon", "feature-icon-no-default");
    });
  },
};
