import React from "react";
import renderer from "react-test-renderer";
import { ArrowIcon, ArrowIconDown, ArrowIconRight, ArrowIconUp, CalendarIcon, CartIcon, CartIconBar, HistoryIcon, HomeIcon, SearchIcon, SearchIconBar, UserIcon } from "../components/UI/Icons";

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArrowIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArrowIconRight/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArrowIconDown/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArrowIconUp/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HomeIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HistoryIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<UserIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CartIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CalendarIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchIconBar/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Styled Icons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CartIconBar/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

