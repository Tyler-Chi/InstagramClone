import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {


  sessionLinks(){

    let currentUser = this.props.currentUser;

    if (currentUser){
      return (
        <div className = "nav-container">



          <p className = "currentuser">
            Logged in as: {this.props.currentUser.username}
          </p>
          <button onClick={this.props.logout}
            className = 'logout'>
            Logout</button>
        </div>
      )
    } else if (this.props.formType === 'login'){
      return (
        <div className = "nav-container">
            <Link to="/signup" className = "li-su">Sign Up</Link>
        </div>
      )
    } else if (this.props.formType === 'signup') {
      return (
        <div className = "nav-container">
          <Link to="/login" className = "li-su">Login</Link>
        </div>
      )
    } else {
      return (
        <div className = "nav-container">

            <Link to="/signup" className = "li-su">Sign Up</Link>

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
