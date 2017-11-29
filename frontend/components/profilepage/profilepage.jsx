import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import ProfileIndexItem from './profileindexitem';


class ProfilePage extends React.Component {

  componentWillMount(){
    this.props.fetchUserInfo(this.props.match.params.username);
    this.props.getProfilePosts(this.props.match.params.username);

  }


  followButton(){
    const { viewed } = this.props.entities;
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

    const { viewed } = this.props.entities;
    const posts = Object.values(this.props.entities.posts)


    return (

      <div className = 'profile-area'>

        <div className = 'person-area'>
          <p>{viewed.email}</p>
          <p> id: {viewed.id} (placeholder, wont have this) </p>
          <p>#Followers: {viewed.numfollowers} </p>
          <p>#Following: {viewed.numfollowing} </p>
          <p>Username: {viewed.username}</p>

          {this.followButton()}

        </div>

        <ul className = 'profile-list'>
          {
            posts.map( post => (
              <ProfileIndexItem
                key={post.id}
                post={post}
                likePost={this.props.likePost}
                unlikePost={this.props.unlikePost}
                />
            ))
          }

        </ul>

      </div>



    )
  }
}

export default ProfilePage;
