import React from 'react';
import { Link } from 'react-router-dom';
//import observer from '../../utils/observer';

const Header = (props) => {

	let logout = (event) => {
		event.preventDefault();
		localStorage.clear();
		props.logOut();
	}

	return (
		<header>
			<nav className="navbar navbar-toggleable-md navbar-light bg-warning">
				<div className="container">
					<button className="navbar-toggler navbar-toggler-right" aria-expanded="false" aria-controls="navbarSupportedContent" aria-label="Toggle navigation" type="button" data-target="#navbarSupportedContent" data-toggle="collapse">
						<span className="navbar-toggler-icon"></span>
					</button>
					<Link className="navbar-brand" to="/">SoftUni Store</Link>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								{props.isLogged && <Link className="nav-link" to="/cart">Cart</Link>}
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								{props.isAdmin && <Link className="nav-link" to="/adminPanel">Admin</Link>}
							</li>

							<li className="nav-item">
								{props.isLogged && <Link className="nav-link" to="/games/catalog">Catalog</Link>}
							</li>

							<li className="nav-item">
								{props.isLogged && <Link className="nav-link" to="/users/logout" onClick={logout}>Logout</Link>}
							</li>
							<li className="nav-item">
								{!props.isLogged && <Link className="nav-link" to="/users/login">Login</Link>}
							</li>

							<li className="nav-item">
								{!props.isLogged && <Link className="nav-link" to="/users/register">Register</Link>}
							</li>
						</ul>
					</div>

				</div>
			</nav>
		</header>
	);
}

export default Header;