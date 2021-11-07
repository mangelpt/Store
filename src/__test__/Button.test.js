import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../components/UI/Button";

describe("Styled Button", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button text="hello" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
