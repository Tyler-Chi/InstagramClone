import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import SideBar from './side_bar';

const mapStateToProps = ({errors,session}) => {

  return {
    currentUser: session.currentUser,
    errors
  }
}

const mapDispatchToProps = (dispatch, {location,history}) => {



  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default  connect(mapStateToProps,mapDispatchToProps)(SideBar);
