import "./styles.css";
import React from "react";
import { clsx } from "clsx";
import Button from "../../ui/Button";
import FeatureList from "../FeatureList";
import Price from "../Price";
import type { Feature } from "../FeatureList";

export interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: Feature[];
  isHighlighted?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  features,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <div
      data-testid="pricing-card"
      className={clsx(
        "our-plan-box",
        isHighlighted ? "our-plan-box-focus" : "our-plan-box-default"
      )}
    >
      <h3
        className={clsx(
          "text-lg font-medium",
          isHighlighted
            ? "our-plan-box-focus-title"
            : "our-plan-box-default-title"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mt-3",
          isHighlighted
            ? "our-plan-box-focus-subtitle"
            : "our-plan-box-default-subtitle"
        )}
      >
        {description}
      </p>
      <Price amount={price} isHighlighted={isHighlighted} />
      <div className="mt-6">
        <Button variant={isHighlighted ? "primary" : "secondary"}>
          Get Started Now
        </Button>
      </div>
      <FeatureList features={features} isHighlighted={isHighlighted} />
    </div>
  );
}

export default PricingCard;
