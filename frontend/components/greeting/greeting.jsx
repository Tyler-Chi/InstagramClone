import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import NewPostForm from '../shared_components/new_post_form';

class Greeting extends React.Component {

  constructor(props){
    super(props);
    this.state = {isModalOpen: false}
  }

  openModal(){
    this.setState({ isModalOpen: true})
  }

  closeModal(){
    this.setState({ isModalOpen:false })
  }



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
            className = 'dashboard-but'
            onClick={()=> this.props.history.push('/dashboard')}
            >
            Dashboard
          </button>

          <button
            className='le-add-photo'
            onClick={()=>this.openModal()}
            >
            Add Photo
          </button>

          <NewPostForm
          createPost={this.props.createPost}
          errors={this.props.errors}
          currentUser = {this.props.currentUser}
          onClose={()=> this.closeModal()}
          isOpen = {this.state.isModalOpen}
          >
          <button onClick = {() => this.closeModal()}>
            Close
          </button>
        </NewPostForm>



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


    console.log('props:',this.props)

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
