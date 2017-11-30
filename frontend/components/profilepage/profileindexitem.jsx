import React from 'react';
import ShowPost from '../shared_components/show';

class ProfileIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.likeUnlike = this.likeUnlike.bind(this);
    this.state = {
      isModalOpen: false
    }
  }

  likeUnlike(){
    if (this.props.post.lbcu){
      return(
        <p>Unlike</p>
      )
    } else {
      return (
        <p>Like</p>

      )
    }
  }


  handleClick(e){
    if (this.props.post.lbcu){
      this.props.unlikePost(this.props.post.id)
      // .then(()=>this.setState({lbcu:false}))
    } else {
      this.props.likePost(this.props.post.id)
      // .then(()=>this.setState({lbcu: true}))
    }

  }
  openModal(){
    this.setState({ isModalOpen: true})
  }

  closeModal(){
    this.setState({ isModalOpen:false })
  }

  render(){


    return (
      <li className='profile-index-item'
        onClick={this.handleClick}
        >
        <div className = 'profile-post-description'>
            {this.props.post.description}
        </div>

          <img src={this.props.post.img_url}
            alt={this.props.post.description}
            className = 'profile-item-image'
            ></img>





          <ShowPost
            isOpen = {this.state.isModalOpen}
            createComment = {this.props.createComment}
            deleteComment = {this.props.deleteComment}
            currentUser = {this.props.currentUser}
            likePost = {this.props.likePost}
            unlikePost = {this.props.unlikePost}
            onClose={()=> this.closeModal()}
            post={this.props.post}
          >


          <button onClick = {() => this.closeModal()}>
            Close
          </button>

        </ShowPost>


      <div className='pii-info'>

        <p>
          Like Count: {this.props.post.likes}
        </p>


      </div>


      </li>
    )



  }


}

export default ProfileIndexItem;
