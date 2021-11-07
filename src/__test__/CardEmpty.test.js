import React from "react";
import renderer from "react-test-renderer";
import { CartEmpty } from "../components/UI/CartEmpty";

describe("Styled Label", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CartEmpty/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});