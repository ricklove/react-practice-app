import React from "react";
import ReactDOM from "react-dom";
import { shallow, render, mount } from "enzyme";
import { FunnyMessages } from "./funny-messages";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FunnyMessages />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("displays a column id", () => {
    const wrapper = shallow(<FunnyMessages />);
    expect(wrapper.html()).toContain("<h3>");
});