import { render, screen, within, waitFor } from "@testing-library/react";
import { PricingCard } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";
import { BillingToggle } from "../BillingToggle";
import userEvent from "@testing-library/user-event";

const sampleFeatures = [
  { name: "10 users included", included: true },
  { name: "2GB of storage", included: true },
  { name: "Email support", included: true },
  { name: "24/7 phone support", included: false },
  { name: "Custom branding", included: false },
];

const renderPricingSection = () => {
  return render(
    <ThemeProvider>
      <PricingProvider>
        <div className="space-y-8">
          <BillingToggle />
          <div className="grid grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              description="Perfect for small teams just getting started"
              price={29}
              features={sampleFeatures}
              isHighlighted={false}
            />
            <PricingCard
              title="Professional"
              description="Everything you need for a growing business"
              price={99}
              features={sampleFeatures.map((f, i) => ({
                ...f,
                included: i < 4,
              }))}
              isHighlighted={true}
            />
            <PricingCard
              title="Enterprise"
              description="Advanced features for large organizations"
              price={299}
              features={sampleFeatures.map(() => ({
                ...sampleFeatures[0],
                included: true,
              }))}
              isHighlighted={false}
            />
          </div>
        </div>
      </PricingProvider>
    </ThemeProvider>
  );
};

describe("Pricing Section E2E", () => {
  it("shows correct prices and savings when toggling between monthly and yearly billing", async () => {
    renderPricingSection();

    // Initial state (monthly billing)
    const starterCard = screen
      .getByRole("heading", { name: "Starter" })
      .closest(".our-plan-box") as HTMLElement;
    const professionalCard = screen
      .getByRole("heading", { name: "Professional" })
      .closest(".our-plan-box") as HTMLElement;
    const enterpriseCard = screen
      .getByRole("heading", { name: "Enterprise" })
      .closest(".our-plan-box") as HTMLElement;

    // Verify initial monthly prices
    expect(
      within(starterCard).getByText((content) => content.includes("29"))
    ).toBeInTheDocument();
    expect(
      within(professionalCard).getByText((content) => content.includes("99"))
    ).toBeInTheDocument();
    expect(
      within(enterpriseCard).getByText((content) => content.includes("299"))
    ).toBeInTheDocument();

    // Switch to yearly billing
    const toggle = screen.getByRole("switch");
    await userEvent.click(toggle);
    await waitFor(
      () => {
        expect(screen.getByText("$278")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Calculate expected yearly prices with 20% discount
    const yearlyPrices = {
      starter: Math.round(29 * 12 * 0.8),
      professional: Math.round(99 * 12 * 0.8),
      enterprise: Math.round(299 * 12 * 0.8),
    };

    // Verify yearly prices
    expect(
      within(starterCard).getByText((content) =>
        content.includes(yearlyPrices.starter.toString())
      )
    ).toBeInTheDocument();
    expect(
      within(professionalCard).getByText((content) =>
        content.includes(yearlyPrices.professional.toString())
      )
    ).toBeInTheDocument();
    expect(
      within(enterpriseCard).getByText((content) =>
        content.includes(yearlyPrices.enterprise.toString())
      )
    ).toBeInTheDocument();

    // Verify yearly billing period
    const yearlyPeriods = screen.getAllByText(
      (content) => content.includes("Year"),
      { selector: ".price-period" }
    );
    expect(yearlyPeriods).toHaveLength(3);

    // Switch back to monthly
    await userEvent.click(toggle);
    await waitFor(
      () => {
        expect(screen.getByText("$29")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Verify monthly prices are back
    expect(
      within(starterCard).getByText((content) => content.includes("29"))
    ).toBeInTheDocument();
    expect(
      within(professionalCard).getByText((content) => content.includes("99"))
    ).toBeInTheDocument();
    expect(
      within(enterpriseCard).getByText((content) => content.includes("299"))
    ).toBeInTheDocument();

    // Verify monthly billing period
    const monthlyPeriods = screen.getAllByText(
      (content) => content.includes("Month"),
      { selector: ".price-period" }
    );
    expect(monthlyPeriods).toHaveLength(3);
  });

  it("maintains highlighted state and features when switching billing periods", async () => {
    renderPricingSection();

    // Get the highlighted Professional card by its title and class
    const highlightedCard = screen
      .getByRole("heading", { name: "Professional" })
      .closest(".our-plan-box");
    expect(highlightedCard).toHaveClass("our-plan-box-focus");

    // Switch to yearly
    const toggle = screen.getByRole("switch");
    await userEvent.click(toggle);
    await waitFor(
      () => {
        expect(screen.getByText("$950")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Verify card is still highlighted
    expect(highlightedCard).toHaveClass("our-plan-box-focus");

    // Find the Professional card's feature list
    const professionalCard = screen
      .getByRole("heading", { name: "Professional" })
      .closest(".our-plan-box") as HTMLElement;
    const phoneSupport =
      within(professionalCard).getByText("24/7 phone support");
    expect(phoneSupport).toHaveClass("feature-text-yes-highlighted");
  });

  it("updates all UI elements consistently when switching billing periods", async () => {
    renderPricingSection();

    const toggle = screen.getByRole("switch");

    // Initial state
    expect(screen.getByText("Monthly")).toHaveClass("billing-period-active");
    expect(screen.getByText("Yearly")).not.toHaveClass("billing-period-active");

    // Switch to yearly
    await userEvent.click(toggle);
    await waitFor(
      () => {
        expect(screen.getByText("$278")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Check UI updates
    expect(screen.getByText("Yearly")).toHaveClass("billing-period-active");
    expect(screen.getByText("Monthly")).not.toHaveClass(
      "billing-period-active"
    );

    // Wait for animation and then check yearly periods
    const yearlyPeriods = await screen.findAllByText(
      (content) => content.includes("Year"),
      { selector: ".price-period" }
    );
    expect(yearlyPeriods).toHaveLength(3);

    // Switch back to monthly
    await userEvent.click(toggle);
    await waitFor(
      () => {
        expect(screen.getByText("$29")).toBeInTheDocument();
      },
      { timeout: 1000 }
    );

    // Check UI reverts
    expect(screen.getByText("Monthly")).toHaveClass("billing-period-active");
    expect(screen.getByText("Yearly")).not.toHaveClass("billing-period-active");

    const monthlyPeriods = screen.getAllByText(
      (content) => content.includes("Month"),
      { selector: ".price-period" }
    );
    expect(monthlyPeriods).toHaveLength(3);
  });
});
