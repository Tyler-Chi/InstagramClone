import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {


  sessionLinks(){

    let currentUser = this.props.currentUser;

    if (currentUser){
      return (

        <div className = "nav-container">


        <button onClick={this.props.logout}
          className = 'li-su logout'>
          Logout</button>

        </div>
      )
    } else if (this.props.formType === 'login'){
      return (
        <div className = "nav-container">
          <nav className="login-signup">


            <Link to="/signup" className = "li-su">Sign Up</Link>

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
    } else {
      return (
        <div className = "nav-container">

            <Link to="/signup" className = "li-su">Sign up</Link>

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
