import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

import Greeting from './greeting';

import { createPost } from '../../actions/post_actions';


// import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ errors,session , location }) => {



  return {
  currentUser: session.currentUser
  }

};

const mapDispatchToProps = (dispatch, {location, history}) => {
  const formType = location.pathname.slice(1);

  return {
  logout: () => dispatch(logout()).then(()=>history.push('/login')),
  formType,
  createPost: post => dispatch(createPost)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
