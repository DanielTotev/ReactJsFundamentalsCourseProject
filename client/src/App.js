import React, { Component } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/Main';
import observer from './utils/observer';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			isAdmin: false
		}
		this.logIn = this.logIn.bind(this);
		observer.add(this.logIn, 'login');
		this.logOut = this.logOut.bind(this);
	}

	logIn() {
		this.setState({
			isLoggedIn: true,
			isAdmin: localStorage.getItem('isAdmin') === 'true'
		});
	}

	logOut() {
		this.setState({
			isLoggedIn: false,
			isAdmin: false
		});
	}

	componentDidMount() {
		if(localStorage.getItem('authtoken')) {
			this.logIn();
		}
	}

	render() {
		return (
			<div className="App">
				<Header isLogged={this.state.isLoggedIn} logOut={this.logOut} isAdmin={this.state.isAdmin}/>
				<Main isLogged={this.state.isLoggedIn} isAdmin={this.state.isAdmin}/>
				<Footer />
			</div>
		);
	}
}

export default App;
