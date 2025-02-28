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
        "pricing-card",
        isHighlighted && "pricing-card-highlighted"
      )}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p
        className={clsx(
          "mt-2 text-sm",
          isHighlighted ? "text-gray-100" : "text-gray-500 dark:text-gray-400"
        )}
      >
        {description}
      </p>
      <p className="mt-8">
        <span className="text-4xl font-bold">${price}</span>
        <span
          className={clsx(
            "text-sm",
            isHighlighted ? "text-gray-100" : "text-gray-500 dark:text-gray-400"
          )}
        >
          /Month
        </span>
      </p>
      <button
        className={clsx(
          "pricing-button",
          isHighlighted ? "pricing-button-highlighted" : "pricing-button-normal"
        )}
      >
        Get Started Now
      </button>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            {feature.included ? (
              <CheckIcon className="h-5 w-5 text-green-500" />
            ) : (
              <XMarkIcon
                className={clsx(
                  "h-5 w-5",
                  isHighlighted
                    ? "text-gray-300"
                    : "text-gray-400 dark:text-gray-600"
                )}
              />
            )}
            <span
              className={clsx(
                "text-sm",
                !feature.included &&
                  (isHighlighted
                    ? "text-gray-300"
                    : "text-gray-400 dark:text-gray-600")
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
