

import { connect } from 'react-redux';

import Index from './index';

const mapStateToProps = ({session , location , entities}) => {

  return {
    currentUser: session.currentUser,
    entities
  }
}

const mapDispatchToProps = (dispatch, {location, history}) => {
  const formType = location.pathname.slice(1);

  return {
  logout: () => dispatch(logout()).then(()=>history.push('/login')),
  formType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
