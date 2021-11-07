import React from "react";
import renderer from "react-test-renderer";
import { TotalPrice } from "../components/TotalPrice";
import {  render } from "@testing-library/react";
describe("Styled Footer", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TotalPrice />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

