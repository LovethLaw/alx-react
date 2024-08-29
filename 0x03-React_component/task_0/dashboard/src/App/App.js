import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from "../Notifications/Notifications";


class App extends React.Component {



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

export default App;
