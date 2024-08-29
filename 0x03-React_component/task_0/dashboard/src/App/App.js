import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from "../Notifications/Notifications";
import PropTypes from 'prop-types';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleKeydown = this.handleKeydown.bind(this);
	}

	componentDidMount() {
		window.addEventListener("keydown", this.handleKeydown)
	}

	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeydown)
	}

	handleKeydown(event) {
		const { logOut } = this.props;
		if (event.ctrlKey && event.key === 'h') {
			alert('Logging you out');
			logOut();
		}
	}

	render() {
		return (
			<>
				<div className='root-notifications'>
					<Notifications />
				</div>
				<div className='App'>
					<Header />
					<Login />
					<Footer />
				</div>
			</>
		);
	}

}


App.propTypes = {
	logOut: PropTypes.func,
};

App.defaultProps = {
	logOut: () => { },
};


export default App;
