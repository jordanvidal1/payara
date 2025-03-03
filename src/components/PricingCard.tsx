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
      <p className="mt-5 flex items-center gap-1.5">
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
              ? "our-plan-box-focus-subtitle"
              : "our-plan-box-default-subtitle"
          )}
        >
          / Month
        </span>
      </p>
      <div className="mt-6">
        <button
          className={clsx(
            "btn",
            isHighlighted ? "btn-primary" : "btn-secondary"
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
                  "our-plan-icon",
                  isHighlighted
                    ? "our-plan-box-focus-icon-yes"
                    : "our-plan-box-default-icon-yes"
                )}
              />
            ) : (
              <XMarkIcon
                className={clsx(
                  "our-plan-icon",
                  isHighlighted
                    ? "our-plan-box-focus-icon-no"
                    : "our-plan-box-default-icon-no"
                )}
              />
            )}
            <span
              className={clsx(
                feature.included
                  ? isHighlighted
                    ? "our-plan-box-focus-text-yes"
                    : "our-plan-box-default-text-yes"
                  : isHighlighted
                  ? "our-plan-box-focus-text-no"
                  : "our-plan-box-default-text-no"
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
