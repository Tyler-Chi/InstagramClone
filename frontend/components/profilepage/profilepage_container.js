import { connect } from 'react-redux';

import { fetchPosts, likePost, unlikePost ,getProfilePosts } from '../../actions/post_actions';

import { withRouter } from 'react-router-dom';

import ProfilePage from './profilepage';

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
    getProfilePosts: username => dispatch(getProfilePosts(username))
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePage))