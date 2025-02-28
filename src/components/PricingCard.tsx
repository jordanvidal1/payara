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
      <h3
        className={clsx(
          "text-2xl font-semibold",
          isHighlighted ? "pricing-title-highlighted" : "pricing-title"
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          "mt-2 text-sm",
          isHighlighted
            ? "pricing-description-highlighted"
            : "pricing-description"
        )}
      >
        {description}
      </p>
      <p className="mt-8">
        <span
          className={clsx(
            "text-4xl font-bold",
            isHighlighted ? "text-white" : "text-violet-950 dark:text-violet-50"
          )}
        >
          ${price}
        </span>
        <span
          className={clsx(
            "text-sm",
            isHighlighted
              ? "pricing-description-highlighted"
              : "pricing-description"
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
              <CheckIcon
                className={clsx(
                  "h-5 w-5",
                  isHighlighted
                    ? "feature-icon-yes-highlighted"
                    : "feature-icon-yes"
                )}
              />
            ) : (
              <XMarkIcon
                className={clsx(
                  "h-5 w-5",
                  isHighlighted
                    ? "feature-icon-no-highlighted"
                    : "feature-icon-no"
                )}
              />
            )}
            <span
              className={clsx(
                "text-sm",
                feature.included
                  ? isHighlighted
                    ? "feature-text-included-highlighted"
                    : "feature-text-included"
                  : isHighlighted
                  ? "feature-text-highlighted"
                  : "feature-text"
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
