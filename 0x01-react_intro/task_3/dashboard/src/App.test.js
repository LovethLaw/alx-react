import React from "react";
import { shallow } from "enzyme";
import App from "./App";


describe("<App/> {Enzyme}", () => {
	it("Render without crashing", () => {
		shallow(<App />)
	})

	const wrapper = shallow(<App />);
	expect(wrapper.exists("App-header")).toBe(true);

	expect(wrapper.exists("App-body")).toBe(true);

	expect(wrapper.exists("App-footer")).toBe(true);
})