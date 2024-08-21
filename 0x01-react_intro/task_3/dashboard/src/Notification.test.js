import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notification";


describe("<Notifications/> {Enzyme}", () => {
	it("Render without crashing", () => {
		shallow(<Notifications />)
	})

	const wrapper = shallow(<Notifications />);
	expect(wrapper.children()).toHaveLength(3);
	expect(wrapper.)
})