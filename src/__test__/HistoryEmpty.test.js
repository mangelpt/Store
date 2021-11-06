import { render } from "@testing-library/react";
import { HistoryEmpty } from "../components/UI/HistoryEmpty";

test("Expensable page renders correctly", () => {
  const { container } = render(<HistoryEmpty/>);
  const title = container.querySelector("h1");
  expect(title).toHaveTextContent("No history yet");
});