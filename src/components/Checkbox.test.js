import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as emotion from "emotion";
import { createSerializer, getStyles, createMatchers } from "jest-emotion";

import Checkbox from "./Checkbox";
import { Message } from "./Checkbox.styles";

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(createMatchers(emotion));

Enzyme.configure({ adapter: new Adapter() });

describe("Checkbox Component", () => {
  it("renders correctly when checked", () => {
    const tree = shallow(<Checkbox checked />);
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly when unchecked", () => {
    const tree = shallow(<Checkbox checked={false} />);
    expect(tree).toMatchSnapshot();
  });
  it("renders a green message when checked", () => {
    const tree = shallow(<Message on />);
    expect(tree).toHaveStyleRule("background-color", "green");
  });
  it("renders a red message when unchecked", () => {
    const tree = shallow(<Message on={false} />);
    expect(tree).toHaveStyleRule("background-color", "red");
  });
});
