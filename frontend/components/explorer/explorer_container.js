import { connect } from 'react-redux';

import { fetchPosts , likePost , unlikePost , createComment , deleteComment , fetchAllPosts } from '../../actions/post_actions';

import { withRouter } from 'react-router-dom';

import Explorer from './explorer'

const mapStateToProps = ({session , location , entities, ui}) => {

  return {
    currentUser: session.currentUser,
    entities,
    ui
  }
}

const mapDispatchToProps = (dispatch, {location, history}) => {

  return {
  likePost: id => dispatch(likePost(id)),
  unlikePost: id => dispatch(unlikePost(id)),
  createComment: (id,body) => dispatch(createComment(id,body)),
  deleteComment: id => dispatch(deleteComment(id)),
  fetchAllPosts: () => dispatch(fetchAllPosts())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer));
