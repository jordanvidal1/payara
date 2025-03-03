import React, { createContext, useContext, useState } from "react";

export type BillingPeriod = "monthly" | "yearly";

interface PricingContextType {
  billingPeriod: BillingPeriod;
  toggleBillingPeriod: () => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export function PricingProvider({ children }: { children: React.ReactNode }) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const toggleBillingPeriod = () => {
    setBillingPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <PricingContext.Provider value={{ billingPeriod, toggleBillingPeriod }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (context === undefined) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
}
