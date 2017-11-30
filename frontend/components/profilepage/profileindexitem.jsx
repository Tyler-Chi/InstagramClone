import React from 'react';
import ShowPost from '../shared_components/show';

class ProfileIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isModalOpen: false
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
      <li className='profile-index-item'>
        <div className = 'post-top-text-area'>
          <p className = 'post-author'>
            {this.props.post.author.name}:
          </p>
          <p className ='post-description'>
            {this.props.post.description}
          </p>
        </div>

        <button onClick={()=> this.openModal()}>
          <img src={this.props.post.img_url}
            alt={this.props.post.description}
            className = 'item-image'
            ></img>
        </button>



        <button
          onClick={this.handleClick}
          >
          THE BUTTON
        </button>

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


        <p>
          {this.props.post.lbcu}
          {this.props.post.likes}
        </p>

      </li>
    )



  }


}

export default ProfileIndexItem;
