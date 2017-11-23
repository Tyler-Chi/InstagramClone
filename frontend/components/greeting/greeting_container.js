import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

import Greeting from './greeting';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ session , location }) => {

  // const formType = location.pathname.slice(1);
  // const attemptTo = (formType === 'login') ? 'login' : 'signup';

  return {
  currentUser: session.currentUser
  }

};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
