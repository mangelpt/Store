import React from "react";
import renderer from "react-test-renderer";
import { Labelittle, Lbl } from "../components/UI/Labels";

describe("Styled Label", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Lbl>My title</Lbl>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Label", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Labelittle>My title</Labelittle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
