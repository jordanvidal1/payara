import "./styles.css";
import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

export interface Feature {
  name: string;
  included: boolean;
}

export interface FeatureListProps {
  features: Feature[];
  isHighlighted?: boolean;
}

export function FeatureList({
  features,
  isHighlighted = false,
}: FeatureListProps) {
  return (
    <ul className="feature-list">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          {feature.included ? (
            <CheckIcon
              className={clsx(
                "feature-icon",
                isHighlighted
                  ? "feature-icon-yes-highlighted"
                  : "feature-icon-yes-default"
              )}
            />
          ) : (
            <XMarkIcon
              className={clsx(
                "feature-icon",
                isHighlighted
                  ? "feature-icon-no-highlighted"
                  : "feature-icon-no-default"
              )}
            />
          )}
          <span
            className={clsx(
              feature.included
                ? isHighlighted
                  ? "feature-text-yes-highlighted"
                  : "feature-text-yes-default"
                : isHighlighted
                ? "feature-text-no-highlighted"
                : "feature-text-no-default"
            )}
          >
            {feature.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
