import { render } from "@testing-library/react";
import { Loading } from "../components/UI/Loading";

test("Expensable page renders correctly", () => {
  const { container } = render(<Loading/>);
  const title = container.querySelector("p");
  expect(title).toHaveTextContent("Food for Everyone");
});
