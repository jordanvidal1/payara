import { render, screen } from "@testing-library/react";
import { Button } from "./index";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  describe("Primary variant", () => {
    it("renders with primary styling", () => {
      render(<Button variant="primary">Primary Button</Button>);
      const button = screen.getByRole("button", { name: "Primary Button" });
      expect(button).toHaveClass("btn btn-primary");
    });

    it("can be hovered", async () => {
      render(<Button variant="primary">Primary Button</Button>);
      const button = screen.getByRole("button", { name: "Primary Button" });
      await userEvent.hover(button);
      expect(button).toHaveClass("btn btn-primary");
    });
  });

  describe("Secondary variant", () => {
    it("renders with secondary styling", () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      const button = screen.getByRole("button", { name: "Secondary Button" });
      expect(button).toHaveClass("btn btn-secondary");
    });
  });

  describe("Disabled state", () => {
    it("renders with disabled attribute", () => {
      render(
        <Button variant="primary" disabled>
          Disabled Button
        </Button>
      );
      const button = screen.getByRole("button", { name: "Disabled Button" });
      expect(button).toBeDisabled();
    });

    it("cannot be clicked when disabled", async () => {
      const handleClick = jest.fn();
      render(
        <Button variant="primary" disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );
      const button = screen.getByRole("button", { name: "Disabled Button" });
      await userEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Long text", () => {
    it("handles long text", () => {
      const longText =
        "This is a button with a very long text to show how it handles overflow";
      render(<Button variant="secondary">{longText}</Button>);
      const button = screen.getByRole("button", { name: longText });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("btn btn-secondary");
    });
  });

  describe("Custom className", () => {
    it("accepts additional classes", () => {
      render(
        <Button variant="primary" className="custom-class">
          Custom Button
        </Button>
      );
      const button = screen.getByRole("button", { name: "Custom Button" });
      expect(button).toHaveClass("btn btn-primary custom-class");
    });
  });
});
