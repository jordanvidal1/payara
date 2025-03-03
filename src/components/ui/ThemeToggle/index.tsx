import "./styles.css";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../theme/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <SunIcon className="theme-toggle-icon" aria-hidden="true" />
      ) : (
        <MoonIcon className="theme-toggle-icon" aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
