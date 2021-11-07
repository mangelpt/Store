import { render } from "@testing-library/react";
import { SearchEmpty } from "../components/UI/SearchEmpty";

test("Expensable page renders correctly", () => {
  const { container } = render(<SearchEmpty/>);
  const title = container.querySelector("h1");
  expect(title).toHaveTextContent("Item not found");
});
