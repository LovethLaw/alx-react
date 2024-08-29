import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<App />);

		expect(component).toBeDefined();
	});

	it('should contain the Header Component', () => {
		const component = shallow(<App />);

		expect(component.find(Header)).toBeDefined();
	});

	it('should contain the Notifications Component', () => {
		const component = shallow(<App />);

		expect(component.find(Notifications)).toBeDefined();
	});

	it('should contain the Login Component', () => {
		const component = shallow(<App />);

		expect(component.find(Login)).toBeDefined();
	});

	it('should contain the footer Component', () => {
		const component = shallow(<App />);

		expect(component.find(Footer)).toBeDefined();
	})
});
