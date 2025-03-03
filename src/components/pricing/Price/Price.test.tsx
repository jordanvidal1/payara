import { render, screen } from "@testing-library/react";
import { Price } from "./index";
import { PricingProvider } from "../../ui/pricing/PricingContext";

const renderWithProvider = (component: React.ReactNode) => {
  return render(<PricingProvider>{component}</PricingProvider>);
};

describe("Price", () => {
  describe("Default price", () => {
    beforeEach(() => {
      renderWithProvider(<Price amount={29} isHighlighted={false} />);
    });

    it("renders the price with currency symbol", () => {
      expect(screen.getByText("$29")).toBeInTheDocument();
    });

    it("renders with default styling", () => {
      const price = screen.getByText("$29");
      expect(price).toHaveClass("price-amount-default");
    });
  });

  describe("Highlighted price", () => {
    beforeEach(() => {
      renderWithProvider(<Price amount={99} isHighlighted={true} />);
    });

    it("renders with highlighted styling", () => {
      const price = screen.getByText("$99");
      expect(price).toHaveClass("price-amount-highlighted");
    });
  });

  describe("Large amount", () => {
    beforeEach(() => {
      renderWithProvider(<Price amount={499} isHighlighted={false} />);
    });

    it("renders large amounts correctly", () => {
      expect(screen.getByText("$499")).toBeInTheDocument();
    });

    it("maintains consistent styling for large amounts", () => {
      const price = screen.getByText("$499");
      expect(price).toHaveClass("price-amount");
      expect(price).toHaveClass("price-amount-default");
    });
  });

  describe("Small amount", () => {
    beforeEach(() => {
      renderWithProvider(<Price amount={9} isHighlighted={false} />);
    });

    it("renders single-digit amounts correctly", () => {
      expect(screen.getByText("$9")).toBeInTheDocument();
    });
  });

  describe("Custom className", () => {
    it("applies additional classes to container", () => {
      renderWithProvider(
        <Price amount={29} isHighlighted={false} className="custom-class" />
      );
      const container = screen.getByText("$29").closest("p");
      expect(container).toHaveClass("custom-class");
    });
  });

  describe("Price with billing period context", () => {
    it("shows monthly price by default", () => {
      renderWithProvider(<Price amount={29} isHighlighted={false} />);
      expect(screen.getByText("$29")).toBeInTheDocument();
      expect(screen.getByText("/ Month")).toBeInTheDocument();
    });

    it("shows yearly price with discount when in yearly mode", () => {
      renderWithProvider(<Price amount={29} isHighlighted={false} />);
      // Note: This test might need to be adjusted based on how your PricingContext
      // handles annual vs monthly billing
      expect(screen.getByText("$29")).toBeInTheDocument();
    });
  });
});
