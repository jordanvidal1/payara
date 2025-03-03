import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default "secondary"
   */
  variant?: "primary" | "secondary";
}

export const Button = ({
  variant = "secondary",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
