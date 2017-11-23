import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {


  sessionLinks(){

    let currentUser = this.props.currentUser;

    if (this.props.formType === 'login'){
      return (
        <div className = "nav-container">
          <nav className="login-signup">
            <Link to="/signup" className = "li-su">Sign up!</Link>
          </nav>
        </div>
      )
    } else if (this.props.formType === 'signup') {
      return (
        <div className = "nav-container">
        <nav className="login-signup">
          <Link to="/login" className = "li-su">Login</Link>
        </nav>
        </div>
      )
    } else if (currentUser){
    return (

      <div className = "nav-container">
      <nav className="login-signup">

      <button onClick={this.props.logout}>Logout!</button>

      </nav>
      </div>
    )
  }

 }

  render() {

    return(
      <div>
        {this.sessionLinks()}
      </div>
    )
  }

}




export default withRouter(Greeting);
