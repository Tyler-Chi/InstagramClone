// import { connect } from 'react-redux';
//
// const mapStateToProps = state => {
//
//   return {
//       loggedIn: Boolean(state.session.currentUser),
//       errors: state.errors
//   }
// }
//
// const

import { connect } from 'react-redux';

import Index from './index';

const mapStateToProps = ({session , location}) => {

  return {
    currentUser: session.currentUser
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
