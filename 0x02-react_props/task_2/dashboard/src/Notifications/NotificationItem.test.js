import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders the correct HTML with type and value props', () => {
		const wrapper = shallow(<NotificationItem type="default" value="test" />);
		expect(wrapper.html()).toContain('data-notification-type="default"');
		expect(wrapper.text()).toBe('test');
	});

	it('renders the correct HTML with html prop', () => {
		const wrapper = shallow(
			<NotificationItem type="default" html={{ __html: html.__html }} />
		);
		expect(wrapper.html()).toContain('<u>test</u>');
	});


});
