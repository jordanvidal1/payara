import { render, screen } from "@testing-library/react";
import { ThemeToggle } from "./index";
import { ThemeProvider } from "../theme/ThemeContext";
import userEvent from "@testing-library/user-event";

const renderWithTheme = (component: React.ReactNode) => {
  return render(
    <ThemeProvider>
      <div className="p-8 flex justify-center items-center">{component}</div>
    </ThemeProvider>
  );
};

describe("ThemeToggle", () => {
  it("renders the theme toggle button", () => {
    renderWithTheme(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("toggles between light and dark themes", async () => {
    renderWithTheme(<ThemeToggle />);
    const button = screen.getByRole("button");

    // Initial state (light theme)
    expect(document.documentElement.classList.contains("dark")).toBeFalsy();

    // Toggle to dark theme
    await userEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBeTruthy();

    // Toggle back to light theme
    await userEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBeFalsy();
  });

  it("displays the correct aria-label based on theme", async () => {
    renderWithTheme(<ThemeToggle />);
    const button = screen.getByRole("button");

    // Initial state (light theme)
    expect(button).toHaveAttribute("aria-label", "Switch to dark mode");

    // Toggle to dark theme
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-label", "Switch to light mode");

    // Toggle back to light theme
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-label", "Switch to dark mode");
  });
});
