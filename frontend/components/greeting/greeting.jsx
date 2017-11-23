import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className = "li-su">Login</Link>

    <Link to="/signup" className = "li-su">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="logged-in-header-right">
    <p >Welcome back, {currentUser.username}</p>
    <button className="li-su" onClick={logout}>Log Out</button>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
