import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

import Greeting from './greeting';

// import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ session , location }) => {



  return {
  currentUser: session.currentUser
  }

};

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);

  return {
  logout: () => dispatch(logout()),
  formType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
