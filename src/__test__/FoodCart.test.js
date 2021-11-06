import { render } from "@testing-library/react";
import { FoodCart } from "../components/UI/FoodCart";

test("Expensable page renders correctly", () => {
  const { container } = render(<FoodCart name="hello"/>);
  const title = container.querySelector("h3");
  expect(title).toHaveTextContent("hello");
});