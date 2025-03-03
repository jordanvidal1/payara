import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { expect, within, userEvent } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "The visual style of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "The content inside the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test button rendering
    const button = canvas.getByRole("button", { name: "Primary Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn-primary");

    // Test button interaction
    await userEvent.click(button);
    expect(button).toHaveFocus();
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test button rendering
    const button = canvas.getByRole("button", { name: "Secondary Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn", "btn-secondary");

    // Test button interaction
    await userEvent.click(button);
    expect(button).toHaveFocus();
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
    children: "Disabled Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test disabled button
    const button = canvas.getByRole("button", { name: "Disabled Button" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveClass("btn");
  },
};

export const LongText: Story = {
  args: {
    variant: "secondary",
    children:
      "This is a button with a very long text to show how it handles overflow",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test button with long text
    const button = canvas.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent?.length).toBeGreaterThan(50);
    expect(button).toHaveClass("btn", "btn-secondary");
  },
};
