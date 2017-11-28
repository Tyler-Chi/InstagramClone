import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import ProfileIndexItem from './profileindexitem';


class ProfilePage extends React.Component {

  componentWillMount(){

    this.props.getProfilePosts(this.props.match.params.username);
  }




  render() {

    const posts = Object.values(this.props.entities.posts)
    return (

      <div className = 'profile-area'>

        <h1 className='person-area'> they call me area....person area</h1>

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
