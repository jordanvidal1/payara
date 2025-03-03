import { render, screen } from "@testing-library/react";
import { PricingCard } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";
import { ThemeProvider } from "../../ui/theme/ThemeContext";

const sampleFeatures = [
  { name: "10 users included", included: true },
  { name: "2GB of storage", included: true },
  { name: "Email support", included: true },
  { name: "24/7 phone support", included: false },
  { name: "Custom branding", included: false },
];

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <PricingProvider>
        <div className="max-w-sm">{component}</div>
      </PricingProvider>
    </ThemeProvider>
  );
};

describe("PricingCard", () => {
  describe("Basic tier", () => {
    beforeEach(() => {
      renderWithProviders(
        <PricingCard
          title="Starter"
          description="Perfect for small teams just getting started"
          price={29}
          features={sampleFeatures}
          isHighlighted={false}
        />
      );
    });

    it("renders the title", () => {
      expect(screen.getByText("Starter")).toBeInTheDocument();
    });

    it("renders the price", () => {
      expect(screen.getByText("$29")).toBeInTheDocument();
    });

    it("renders included features", () => {
      expect(screen.getByText("10 users included")).toBeInTheDocument();
    });

    it("styles non-included features differently", () => {
      const nonIncludedFeature = screen.getByText("24/7 phone support");
      expect(nonIncludedFeature).toHaveClass("feature-text-no-default");
    });

    it("has default styling", () => {
      const card = screen.getByTestId("pricing-card");
      expect(card).toHaveClass("our-plan-box-default");
    });
  });

  describe("Premium tier", () => {
    beforeEach(() => {
      renderWithProviders(
        <PricingCard
          title="Professional"
          description="Everything you need for a growing business"
          price={99}
          features={sampleFeatures.map((f, i) => ({ ...f, included: i < 4 }))}
          isHighlighted={true}
        />
      );
    });

    it("has special styling when highlighted", () => {
      const card = screen.getByTestId("pricing-card");
      expect(card).toHaveClass("our-plan-box-focus");
    });

    it("includes more features than Basic tier", () => {
      const phoneSupport = screen.getByText("24/7 phone support");
      expect(phoneSupport).toHaveClass("feature-text-yes-highlighted");
    });
  });
});
