import { render, screen, fireEvent } from "@testing-library/react";
import App, { addSpacesCamelCase } from "./App";

describe("button color and text change", () => {
  test("button has correct initial color", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });

  test("button has correct initial text", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toHaveTextContent("Change to blue");
  });

  test("button turns blue when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /change to blue/i });

    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "blue" });
  });

  test("button text changes when clicked", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /change to blue/i });

    fireEvent.click(button);

    expect(button).toHaveTextContent(/change to red/i);
  });
});

describe("button and checkbox", () => {
  test("button inital condition", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: /change to blue/i });
    expect(button).toBeEnabled();
  });

  test("checkbox inital condition", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("when checkbox is clicked, the button is disabled", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    fireEvent.click(checkbox);

    const button = screen.getByRole("button", { name: /change to blue/i });

    expect(button).toBeDisabled();
  });

  test("when checkbox is clicked twice, the button is enabled again", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    fireEvent.click(checkbox);

    const button = screen.getByRole("button", { name: /change to blue/i });

    expect(button).toBeDisabled();

    fireEvent.click(checkbox);

    expect(button).toBeEnabled();
  });

  test("when button is disabled its color is gray", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

    const button = screen.getByRole("button", { name: /change to blue/i });

    expect(button).toHaveStyle({ backgroundColor: "red" });

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "gray" });
  });

  test("after clicking button and checkbox twice, the button is blue", () => {
    render(<App />);

    const checkbox = screen.getByRole("checkbox", { name: /disable button/i });
    const button = screen.getByRole("button", { name: /change to blue/i });

    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "blue" });

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "gray" });

    fireEvent.click(checkbox);

    expect(button).toHaveStyle({ backgroundColor: "blue" });

    fireEvent.click(button);

    expect(button).toHaveStyle({ backgroundColor: "red" });
  });
});

describe("add spaces in camel-case function tests", () => {
  test("Works for no inner capital letters", () => {
    expect(addSpacesCamelCase("Red")).toBe("Red");
  });

  test("Works for one inner capital letters", () => {
    expect(addSpacesCamelCase("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(addSpacesCamelCase("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
