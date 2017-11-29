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

    const { viewed } = this.props.entities;
    const posts = Object.values(this.props.entities.posts)

    console.log('current props',this.props);

    if (this.props.ui.loading){
      return <p className='.loading-item'> loading </p>
    } else {

    return (

      <div className = 'profile-area'>

        <div className = 'person-area'>

          <div className ='profile-image'>
            FUTURE IMAGE
          </div>


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

            <div className = 'description-area'>
              i am the description. look at me! im so cool. im such a cool person. im so popular n shit. i hope u get the gud vibez from this description.

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
                />
            ))
          }

        </ul>

      </div>



    )
    }
  }
}

export default ProfilePage;
