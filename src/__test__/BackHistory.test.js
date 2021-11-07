import React from "react";
import renderer from "react-test-renderer";
import { BackHistory } from "../components/UI/BackHistory";
  
describe("Styled Label", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<BackHistory
      children="My title"></BackHistory>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });