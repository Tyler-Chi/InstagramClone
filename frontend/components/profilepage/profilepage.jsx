import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import ProfileIndexItem from './profileindexitem';
import OtherLoading from '../shared_components/other_loading';


class ProfilePage extends React.Component {

  componentWillMount(){

    console.log('component will mount has run')

    this.props.fetchUserInfo(this.props.match.params.username);
    this.props.getProfilePosts(this.props.match.params.username);

  }

  componentDidMount(){
    console.log('component did mount has run')
  }


  followButton(){
    const { viewed } = this.props.entities;

    if (viewed.id === this.props.currentUser.id){
      return (
        <div>

        </div>
      )
    }

    if (viewed.fbcu){
      return (
        <button
          onClick={ () => this.props.destroyFollow(viewed.id) }
          >
          unfollow
        </button>
      )
    } else {
      return (
        <button
          onClick={ () => this.props.createFollow(viewed.id)}
          >
          follow
        </button>
      )
    }
  }



  render() {

    console.log('component has rendered')

    // debugger;

    const { viewed } = this.props.entities;
    const posts = Object.values(this.props.entities.posts)


    if (this.props.ui.loading){
      return (
        <OtherLoading />
      )
    }

    return (

      <div className = 'profile-area'>

        <div className = 'person-area'>



          <div className='profile-info'>

            <div className = 'profile-info-top-area'>
              <p className='viewed-username'>{viewed.username}</p>
              {this.followButton()}
            </div>

            <div className='profile-info-middle-area'>

              <p className='posts-count'>
                {Object.keys(this.props.entities.posts).length} posts
              </p>

              <p className='followers-count'>
                {viewed.numfollowers} followers
              </p>

              <p>
                {viewed.numfollowing} following
              </p>


            </div>




          </div>






        </div>




        <ul className = 'profile-list'>
          {
            posts.map( post => (
              <ProfileIndexItem
                key={post.id}
                post={post}
                likePost={this.props.likePost}
                unlikePost={this.props.unlikePost}
                currentUser = {this.props.currentUser}
                createComment = {this.props.createComment}
                deleteComment = {this.props.deleteComment}
                />
            ))
          }

        </ul>

      </div>



    )

  }
}

export default ProfilePage;
