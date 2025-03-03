import "./styles.css";
import React from "react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { usePricing } from "../../ui/pricing/PricingContext";

export interface PriceProps {
  /**
   * The monthly price amount to display
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
  const { billingPeriod } = usePricing();
  const isYearly = billingPeriod === "yearly";

  // Calculate yearly price with 20% discount
  const displayAmount = Math.round(isYearly ? amount * 12 * 0.8 : amount);

  return (
    <p className={clsx("price-container", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={billingPeriod}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className={clsx(
            "price-amount",
            isHighlighted ? "price-amount-highlighted" : "price-amount-default"
          )}
        >
          ${displayAmount}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={billingPeriod}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className={clsx(
            "price-period",
            isHighlighted ? "price-period-highlighted" : "price-period-default"
          )}
        >
          / {isYearly ? "Year" : "Month"}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}

export default Price;
