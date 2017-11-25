import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import SideBar from './side_bar';

const mapStateToProps = ({session}) => {

  return {
    currentUser: session.currentUser
  }
}

const mapDispatchToProps = (dispatch, {location,history}) => {



  return {
    createPost: () => dispatch(createPost())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
