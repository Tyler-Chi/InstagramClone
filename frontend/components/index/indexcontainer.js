

import { connect } from 'react-redux';

import { fetchPosts , likePost, unlikePost} from '../../actions/post_actions';

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
  formType,
  fetchPosts: () => dispatch(fetchPosts()),
  likePost: id => dispatch(likePost(id)),
  unlikePost: id => dispatch(unlikePost(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
