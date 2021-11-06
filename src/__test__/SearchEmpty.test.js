import React from "react";
import renderer from "react-test-renderer";
import { SearchEmpty } from "../components/UI/SearchEmpty";

describe("Styled SearchEmpty", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchEmpty/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
