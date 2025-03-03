import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
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
      className={clsx(
        "OurPlan-Box-Default-Background",
        isHighlighted && "OurPlan-Box-Focus-Background"
      )}
    >
      <h3
        className={clsx(
          "text-lg font-medium",
          isHighlighted
            ? "OurPlan-Box-Focus-Title"
            : "OurPlan-Box-Default-Title"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mt-2",
          isHighlighted
            ? "OurPlan-Box-Focus-Subtitle"
            : "OurPlan-Box-Default-Subtitle"
        )}
      >
        {description}
      </p>
      <p className="mt-6 flex items-center gap-1.5">
        <span
          className={clsx(
            "text-xl font-bold",
            isHighlighted ? "text-white" : "text-violet-950 dark:text-violet-50"
          )}
        >
          ${price}
        </span>
        <span
          className={clsx(
            isHighlighted
              ? "OurPlan-Box-Focus-Subtitle"
              : "OurPlan-Box-Default-Subtitle"
          )}
        >
          / Month
        </span>
      </p>
      <div className="mt-6">
        <button
          className={clsx(
            "Btn",
            isHighlighted ? "Btn-Primary" : "Btn-Secondary"
          )}
        >
          Get Started Now
        </button>
      </div>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-4">
            {feature.included ? (
              <CheckIcon
                className={clsx(
                  "OurPlan-Icon",
                  isHighlighted
                    ? "OurPlan-Box-Focus-IconYes"
                    : "OurPlan-Box-Default-IconYes"
                )}
              />
            ) : (
              <XMarkIcon
                className={clsx(
                  "OurPlan-Icon",
                  isHighlighted
                    ? "OurPlan-Box-Focus-IconNo"
                    : "OurPlan-Box-Default-IconNo"
                )}
              />
            )}
            <span
              className={clsx(
                feature.included
                  ? isHighlighted
                    ? "OurPlan-Box-Focus-TextYes"
                    : "OurPlan-Box-Default-TextYes"
                  : isHighlighted
                  ? "OurPlan-Box-Focus-TextNo"
                  : "OurPlan-Box-Default-TextNo"
              )}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
