import { TotalPrice } from "../components/TotalPrice";
import { screen, render } from "@testing-library/react";

test("Price renders correctly", () => {
    const { container } = render(<TotalPrice pricetotal="10"/>);
    // screen.debug()
    const p = container.querySelector("p");
    const label = container.querySelector("label");
  
    expect(p).toHaveTextContent("Total:");
    expect(label).toHaveTextContent("10");
  });
  