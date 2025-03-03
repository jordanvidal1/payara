import "./styles.css";
import React from "react";
import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { usePricing } from "../../ui/pricing/PricingContext";
import { clsx } from "clsx";

export function BillingToggle() {
  const { billingPeriod, toggleBillingPeriod, yearlyDiscount } = usePricing();
  const isYearly = billingPeriod === "yearly";

  return (
    <div className="billing-toggle-container">
      <span
        className={clsx("billing-period", !isYearly && "billing-period-active")}
      >
        Monthly
      </span>
      <Switch
        checked={isYearly}
        onChange={toggleBillingPeriod}
        className={clsx(
          "billing-switch",
          isYearly ? "billing-switch-yearly" : "billing-switch-monthly"
        )}
      >
        <motion.span
          initial={{ x: isYearly ? 32 : 4 }}
          animate={{ x: isYearly ? 32 : 4 }}
          className="billing-switch-handle"
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
            mass: 1,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </Switch>
      <span
        className={clsx("billing-period", isYearly && "billing-period-active")}
      >
        Yearly
        <span className="billing-discount">Save {yearlyDiscount}%</span>
      </span>
    </div>
  );
}
