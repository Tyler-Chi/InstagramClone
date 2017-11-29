import { connect } from 'react-redux';

import { fetchPosts, likePost, unlikePost ,getProfilePosts } from '../../actions/post_actions';

import { fetchUserInfo } from '../../actions/user_actions';

import { withRouter } from 'react-router-dom';

import ProfilePage from './profilepage';

import { createFollow, destroyFollow } from '../../actions/user_actions';

const mapStateToProps = ({session, location, entities}) => {


  return {
    currentUser: session.currentUser,
    entities
  }

}

const mapDispatchToProps = (dispatch, {location, history}) => {

  return {
    fetchPosts: () => dispatch(fetchPosts()),
    likePost: id => dispatch(likePost(id)),
    unlikePost: id => dispatch(unlikePost(id)),
    getProfilePosts: username => dispatch(getProfilePosts(username)),
    fetchUserInfo: username => dispatch(fetchUserInfo(username)),
    createFollow: id => dispatch(createFollow(id)),
    destroyFollow: id => dispatch(destroyFollow(id))
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePage))
