"use client";

import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PricingCard } from "@/components/PricingCard";

const pricingData = [
  {
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: false },
      { name: "Unlimited Sharing", included: false },
      { name: "Upload graphics & video in up to 4k", included: false },
      { name: "Unlimited Projects", included: false },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    title: "Professional",
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: false },
      { name: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    title: "Enterprise",
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [
      { name: "20,000+ of PNG & SVG graphics", included: true },
      { name: "Access to 100 million stock images", included: true },
      { name: "Upload custom icons and fonts", included: true },
      { name: "Unlimited Sharing", included: true },
      { name: "Upload graphics & video in up to 4k", included: true },
      { name: "Unlimited Projects", included: true },
      { name: "Instant Access to our design system", included: true },
      { name: "Create teams to collaborate on designs", included: true },
    ],
  },
];

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-violet-50 px-4 py-16 sm:px-6 dark:bg-gray-800">
        <ThemeToggle />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="OurPlan-Title">
              Powerful features for{" "}
              <span className="OurPlan-Title-Violet">powerful creators</span>
            </h1>
            <p className="OurPlan-Subtitle mt-4">
              Choose a plan that's right for you
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {pricingData.map((plan, index) => (
              <PricingCard
                key={plan.title}
                {...plan}
                isHighlighted={index === 1}
              />
            ))}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
