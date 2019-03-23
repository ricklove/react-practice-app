import React from "react";
import ReactDOM from "react-dom";
import { shallow, render, mount } from "enzyme";
import BlogList from "./blog-list";
import { sampleArticles } from "./sample-articles";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BlogList articles={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it("displays hello world for greeting toggle enabled", () => {
    const wrapper = shallow(<BlogList articles={[]} />);
    expect(wrapper.html()).toContain("Articles");
});

it("displays hello world for greeting toggle enabled", () => {
    const wrapper = mount(<BlogList articles={[]} />);
    wrapper.setState({ articles: sampleArticles });
    expect(wrapper.html()).toContain("Article Title");
});