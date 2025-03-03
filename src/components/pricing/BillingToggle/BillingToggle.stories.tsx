import type { Meta, StoryObj } from "@storybook/react";
import { BillingToggle } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";

const meta: Meta<typeof BillingToggle> = {
  title: "Pricing/BillingToggle",
  component: BillingToggle,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <PricingProvider>
          <div className="p-8 flex justify-center items-center bg-violet-50 dark:bg-gray-800">
            <Story />
          </div>
        </PricingProvider>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BillingToggle>;

export const Default: Story = {
  args: {},
};
