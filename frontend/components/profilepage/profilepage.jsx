import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import ProfileIndexItem from './profileindexitem';


class ProfilePage extends React.Component {

  componentWillMount(){
    this.props.fetchUserInfo(this.props.match.params.username);
    this.props.getProfilePosts(this.props.match.params.username);
  }




  render() {

    const { viewed } = this.props.entities;

    console.log('viewed',viewed);

    const posts = Object.values(this.props.entities.posts)
    return (

      <div className = 'profile-area'>

        <div className = 'person-area'>
          <p>{viewed.email}</p>
          <p> id: {viewed.id} (placeholder, wont have this) </p>
          <p>#Followers: {viewed.numfollowers} </p>
          <p>#Following: {viewed.numfollowing} </p>
          <p>Username: {viewed.username}</p>

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
