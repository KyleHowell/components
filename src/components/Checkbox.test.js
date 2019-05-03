import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as emotion from "emotion";
import { createSerializer, createMatchers } from "jest-emotion";

import Checkbox from "./Checkbox";

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(createMatchers(emotion));

Enzyme.configure({ adapter: new Adapter() });

describe("Checkbox Component", () => {
  it("renders correctly when checked", () => {
    const tree = shallow(<Checkbox checked />);
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly when unchecked", () => {
    const tree = shallow(<Checkbox checked={false} />);
    expect(tree).toMatchSnapshot();
  });
});
