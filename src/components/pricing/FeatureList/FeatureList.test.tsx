import { render, screen } from "@testing-library/react";
import { FeatureList } from "./index";

const sampleFeatures = [
  { name: "10 users included", included: true },
  { name: "2GB of storage", included: true },
  { name: "Email support", included: true },
  { name: "24/7 phone support", included: false },
  { name: "Custom branding", included: false },
];

describe("FeatureList", () => {
  describe("Default state", () => {
    beforeEach(() => {
      render(<FeatureList features={sampleFeatures} isHighlighted={false} />);
    });

    it("renders all features", () => {
      sampleFeatures.forEach((feature) => {
        expect(screen.getByText(feature.name)).toBeInTheDocument();
      });
    });

    it("styles included features correctly", () => {
      const includedFeature = screen.getByText("10 users included");
      expect(includedFeature).toHaveClass("feature-text-yes-default");
      const icon =
        includedFeature.parentElement?.querySelector(".feature-icon");
      expect(icon).toHaveClass("feature-icon-yes-default");
    });

    it("styles excluded features correctly", () => {
      const excludedFeature = screen.getByText("24/7 phone support");
      expect(excludedFeature).toHaveClass("feature-text-no-default");
      const icon =
        excludedFeature.parentElement?.querySelector(".feature-icon");
      expect(icon).toHaveClass("feature-icon-no-default");
    });
  });

  describe("Highlighted state", () => {
    beforeEach(() => {
      render(<FeatureList features={sampleFeatures} isHighlighted={true} />);
    });

    it("applies highlighted styling", () => {
      const includedFeature = screen.getByText("10 users included");
      expect(includedFeature).toHaveClass("feature-text-yes-highlighted");
      const icon =
        includedFeature.parentElement?.querySelector(".feature-icon");
      expect(icon).toHaveClass("feature-icon-yes-highlighted");
    });
  });

  describe("All features included", () => {
    const allIncludedFeatures = sampleFeatures.map((f) => ({
      ...f,
      included: true,
    }));

    beforeEach(() => {
      render(
        <FeatureList features={allIncludedFeatures} isHighlighted={false} />
      );
    });

    it("shows check icons for all features", () => {
      allIncludedFeatures.forEach((feature) => {
        const featureText = screen.getByText(feature.name);
        const icon = featureText.parentElement?.querySelector(".feature-icon");
        expect(icon).toHaveClass("feature-icon-yes-default");
      });
    });

    it("styles all features as included", () => {
      allIncludedFeatures.forEach((feature) => {
        const featureElement = screen.getByText(feature.name);
        expect(featureElement).toHaveClass("feature-text-yes-default");
      });
    });
  });

  describe("All features excluded", () => {
    const allExcludedFeatures = sampleFeatures.map((f) => ({
      ...f,
      included: false,
    }));

    beforeEach(() => {
      render(
        <FeatureList features={allExcludedFeatures} isHighlighted={false} />
      );
    });

    it("shows x icons for all features", () => {
      allExcludedFeatures.forEach((feature) => {
        const featureText = screen.getByText(feature.name);
        const icon = featureText.parentElement?.querySelector(".feature-icon");
        expect(icon).toHaveClass("feature-icon-no-default");
      });
    });

    it("styles all features as excluded", () => {
      allExcludedFeatures.forEach((feature) => {
        const featureElement = screen.getByText(feature.name);
        expect(featureElement).toHaveClass("feature-text-no-default");
      });
    });
  });
});
