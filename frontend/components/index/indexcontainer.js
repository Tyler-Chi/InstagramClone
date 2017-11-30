

import { connect } from 'react-redux';

import { fetchPosts , likePost, unlikePost, createComment, deleteComment} from '../../actions/post_actions';

import { withRouter } from 'react-router-dom';

import Index from './index';

const mapStateToProps = ({ui, session , location , entities}) => {

  return {
    currentUser: session.currentUser,
    entities,
    ui
  }
}

const mapDispatchToProps = (dispatch, {location, history}) => {
  const formType = location.pathname.slice(1);

  return {
  logout: () => dispatch(logout()).then(()=>history.push('/login')),
  formType,
  fetchPosts: () => dispatch(fetchPosts()),
  likePost: id => dispatch(likePost(id)),
  unlikePost: id => dispatch(unlikePost(id)),
  createComment: (id,body) => dispatch(createComment(id,body)),
  deleteComment: id => dispatch(deleteComment(id))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Index));
