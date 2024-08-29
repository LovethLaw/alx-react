import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
	let wrapper;
	let mockLogOut;

	beforeEach(() => {
		mockLogOut = jest.fn();
		wrapper = shallow(<App logOut={mockLogOut} />);
		window.alert = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should call logOut and display alert when Ctrl+h is pressed', () => {
		const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
		window.dispatchEvent(event);

		expect(window.alert).toHaveBeenCalledWith('Logging you out');
		expect(mockLogOut).toHaveBeenCalled();
	});
});
