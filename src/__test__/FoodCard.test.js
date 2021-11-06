import { render } from "@testing-library/react";
import { FoodCard } from "../components/UI/FoodCard";

test("Expensable page renders correctly", () => {
  const { container } = render(<FoodCard name="hello" price="100"/>);
  const title = container.querySelector("h3");
  expect(title).toHaveTextContent("hello");
});