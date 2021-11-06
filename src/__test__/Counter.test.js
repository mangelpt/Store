import React from "react";
import renderer from "react-test-renderer";
import { Counter } from "../components/UI/Counter";

describe("Styled Counter", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
