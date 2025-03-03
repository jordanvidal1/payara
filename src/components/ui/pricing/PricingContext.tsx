import React, { createContext, useContext, useState } from "react";

export type BillingPeriod = "monthly" | "yearly";

interface PricingContextType {
  billingPeriod: BillingPeriod;
  toggleBillingPeriod: () => void;
  yearlyDiscount: number;
  setYearlyDiscount: (discount: number) => void;
}

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export interface PricingProviderProps {
  children: React.ReactNode;
  initialDiscount?: number;
}

export function PricingProvider({
  children,
  initialDiscount = 20,
}: PricingProviderProps) {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [yearlyDiscount, setYearlyDiscount] = useState(initialDiscount);

  const toggleBillingPeriod = () => {
    setBillingPeriod((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <PricingContext.Provider
      value={{
        billingPeriod,
        toggleBillingPeriod,
        yearlyDiscount,
        setYearlyDiscount,
      }}
    >
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
