import { render, screen } from "@testing-library/react";
import { BillingToggle } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";
import userEvent from "@testing-library/user-event";

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <PricingProvider>
        <div className="p-8 flex justify-center items-center bg-violet-50 dark:bg-gray-800">
          {component}
        </div>
      </PricingProvider>
    </ThemeProvider>
  );
};

describe("BillingToggle", () => {
  it("renders the billing toggle", () => {
    renderWithProviders(<BillingToggle />);
    const toggle = screen.getByRole("switch");
    expect(toggle).toBeInTheDocument();
  });

  it("shows monthly billing by default", () => {
    renderWithProviders(<BillingToggle />);
    const toggle = screen.getByRole("switch");
    expect(toggle).not.toBeChecked();
    expect(screen.getByText("Monthly")).toHaveClass("billing-period-active");
  });

  it("toggles between monthly and yearly billing", async () => {
    renderWithProviders(<BillingToggle />);
    const toggle = screen.getByRole("switch");

    // Initial state (monthly)
    expect(toggle).not.toBeChecked();
    expect(screen.getByText("Monthly")).toHaveClass("billing-period-active");

    // Switch to yearly
    await userEvent.click(toggle);
    expect(toggle).toBeChecked();
    expect(screen.getByText("Yearly")).toHaveClass("billing-period-active");

    // Switch back to monthly
    await userEvent.click(toggle);
    expect(toggle).not.toBeChecked();
    expect(screen.getByText("Monthly")).toHaveClass("billing-period-active");
  });

  it("shows annual discount when in yearly mode", async () => {
    renderWithProviders(<BillingToggle />);
    const toggle = screen.getByRole("switch");

    await userEvent.click(toggle);
    expect(screen.getByText("Save 20%")).toBeInTheDocument();
  });
});
