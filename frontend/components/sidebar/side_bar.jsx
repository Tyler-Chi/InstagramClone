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
        Open Modal
      </button>

      <button onClick={() => this.props.history.push('/user')}>
        Profile Page
      </button>

          <NewPostForm createPost={this.props.createPost} errors={this.props.errors}
          currentUser = {this.props.currentUser}
          onClose={()=> this.closeModal()}
          isOpen = {this.state.isModalOpen}
          >

          <button onClick = {() => this.closeModal()}>
            Close
          </button>

        </NewPostForm>


      </div>
    )
  }
}

export default SideBar;
