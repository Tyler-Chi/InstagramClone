import { connect } from 'react-redux';

import { fetchPosts, likePost, unlikePost } from '../../actions/post_actions';

import { withrouter } from 'react-router-dom';

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
    unlikePost: id => dispatch(unlikePost(id))
  }


}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePage))
