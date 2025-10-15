import React from "react";
import { render } from "@/src/test-utils";
import Hero from ".";

describe("Hero", () => {
  let rendered;

  beforeEach(() => {
    rendered = render(<Hero />);
  });

  it("renders correctly", () => {
    const { container } = rendered;
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with marked=true", () => {
    const { container } = render(<Hero marked />);
    expect(container).toMatchSnapshot();
  });

  it("renders cta button", () => {
    const button = rendered.getByText("Teste grátis por 30 dias");
    expect(button).toBeVisible();
    expect(button).toBeEnabled();
  });
});
