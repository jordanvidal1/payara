import type { Meta, StoryObj } from "@storybook/react";
import { BillingToggle } from "./index";
import { PricingProvider, usePricing } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";
import { expect, within, userEvent } from "@storybook/test";
import { useEffect } from "react";

// Create a wrapper component that accepts the discount prop
function BillingToggleWithDiscount({ yearlyDiscount = 20 }) {
  return (
    <ThemeProvider>
      <PricingProvider initialDiscount={yearlyDiscount}>
        <BillingToggleContent yearlyDiscount={yearlyDiscount} />
      </PricingProvider>
    </ThemeProvider>
  );
}

// Separate component to use the context
function BillingToggleContent({ yearlyDiscount }: { yearlyDiscount: number }) {
  const { setYearlyDiscount } = usePricing();

  useEffect(() => {
    setYearlyDiscount(yearlyDiscount);
  }, [yearlyDiscount, setYearlyDiscount]);

  return (
    <div className="p-8 flex justify-center items-center bg-violet-50 dark:bg-gray-800">
      <BillingToggle />
    </div>
  );
}

const meta = {
  title: "Pricing/BillingToggle",
  component: BillingToggleWithDiscount,
  tags: ["autodocs"],
  argTypes: {
    yearlyDiscount: {
      control: { type: "range", min: 0, max: 50, step: 5 },
      description: "The discount percentage for yearly billing",
      defaultValue: 20,
    },
  },
} satisfies Meta<typeof BillingToggleWithDiscount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    yearlyDiscount: 20,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test initial state (monthly)
    const monthlyText = canvas.getByText("Monthly");
    expect(monthlyText).toHaveClass("billing-period-active");

    // Test discount text
    const discountText = canvas.getByText((content) =>
      content.includes("Save 20%")
    );
    expect(discountText).toHaveClass("billing-discount");

    // Test toggle
    const toggle = canvas.getByRole("switch");
    await userEvent.click(toggle);

    // Test yearly state
    const yearlyText = canvas.getByText("Yearly");
    expect(yearlyText).toHaveClass("billing-period-active");
  },
};
