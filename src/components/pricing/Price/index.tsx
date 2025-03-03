import "./styles.css";
import React from "react";
import { clsx } from "clsx";

export interface PriceProps {
  /**
   * The price amount to display
   */
  amount: number;
  /**
   * Whether this price is in a highlighted card
   */
  isHighlighted?: boolean;
  /**
   * Optional className to override styles
   */
  className?: string;
}

export function Price({
  amount,
  isHighlighted = false,
  className,
}: PriceProps) {
  return (
    <p className={clsx("price-container", className)}>
      <span
        className={clsx(
          "price-amount",
          isHighlighted ? "price-amount-highlighted" : "price-amount-default"
        )}
      >
        ${amount}
      </span>
      <span
        className={clsx(
          "price-period",
          isHighlighted ? "price-period-highlighted" : "price-period-default"
        )}
      >
        / Month
      </span>
    </p>
  );
}

export default Price;
