import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Greeting extends React.Component {

  logo(){
    return(
    <div className='n-logo-area'>
      <button className= 'logo'>Image-in</button>
    </div>
    )
  }

  // user should be able to add post, go to their own profile,
  // and go to the explorer
  loggedInButtons(){
    if (this.props.currentUser){
      return (
        <div className='n-logged-in-buttons'>
          <button
            className = 'my-page'
            onClick={() => this.props.history.push(`/user/${this.props.currentUser.username}`)}>
            My Page
          </button>

          <button
            className = 'explorer-but'
            onClick={()=> this.props.history.push('/explorer')}
            >
            Explorer
          </button>

          <button
            className='le-add-photo'
            >
            Add Photo
          </button>


        </div>
      )
    } else {

    }
  }



  sessionLinks(){

    let currentUser = this.props.currentUser;

    if (currentUser){
      return (
        <div className="n-topright">

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
        <div className="n-topright">
          <Link to="/signup" className = "li-su">Sign Up</Link>
        </div>
      )
    } else if (this.props.formType === 'signup') {
      return (
        <div className="n-topright">
          <Link to="/login" className = "li-su">Login</Link>
        </div>

      )
    } else {
      return (
        <div className="n-topright">
          <Link to="/signup" className = "li-su">Sign Up</Link>
        </div>

      )
    }



 }

  render() {

    console.log('navbar props',this.props);

    return(
      <div className='nav-container'>

        {this.logo()}
        {this.loggedInButtons()}
        {this.sessionLinks()}

      </div>
    )
  }

}




export default withRouter(Greeting);
