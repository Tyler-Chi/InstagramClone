import React from 'react';
import NewPostForm from './new_post_form';

class SideBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {isModalOpen: false}
  }

  openModal(){
    this.setState({ isModalOpen: true})
  }

  closeModal(){
    this.setState({ isModalOpen:false })
  }




  render(){


    const post = {description: 'puppy',img_url: 'aowiejfa',authorId: this.props.currentUser.id}

    return (
      <div className="sidebar-container">

      <button onClick={()=> this.openModal()}
        className ='open-modal'
      >

      </button>

      <button
        className='profile-button'
        onClick={() => this.props.history.push(`/user/${this.props.currentUser.username}`)}>
        Profile
      </button>


        <NewPostForm createPost={this.props.createPost}
          errors={this.props.errors}
          currentUser = {this.props.currentUser}
          onClose={()=> this.closeModal()}
          isOpen = {this.state.isModalOpen}
          >
          <button onClick = {() => this.closeModal()}>
            Close
          </button>
        </NewPostForm>

      <button
        className='explorer-button'
        onClick={()=> this.props.history.push('/explorer')}
        >
        go to explorer
      </button>


      </div>
    )
  }
}

export default SideBar;
