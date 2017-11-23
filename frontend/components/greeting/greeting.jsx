import React from 'react';
import { Link } from 'react-router-dom';



const sessionLinks = (props) => {

  return (

  <div className = "nav-container">
  <nav className="login-signup">
    <Link to="/login" className = "li-su">Login</Link>

    <Link to="/signup" className = "li-su">Sign up!</Link>
  </nav>
  </div>
  )
};

const personalGreeting = (currentUser, logout, match) => (

  <div>

  	<div className="logged-in-header-right">
      <p >Welcome back, {currentUser.username}</p>
      <button className="li-su" onClick={logout}>Log Out</button>
  	</div>

    </div>


);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
