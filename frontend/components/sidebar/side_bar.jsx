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

  // dashboardprofile(){
  //   console.log('these are my props',this.props);
  //
  //   if (this.props.match.params.path === '/user/:username'){
  //     return (
  //       <div>
  //         back to dashboard
  //       </div>
  //     );
  //   } else {
  //     return (
  //     <button onClick={() => this.props.history.push(`/user/${this.props.currentUser.username}`)}>
  //       Profile Page
  //     </button>
  //   )
  //   }
  //
  // }


  render(){


    const post = {description: 'puppy',img_url: 'aowiejfa',authorId: this.props.currentUser.id}

    return (
      <div className="sidebar-container">

      <button onClick={()=> this.openModal()}
        className ='open-modal'
      >
  
      </button>

      <button onClick={() => this.props.history.push(`/user/${this.props.currentUser.username}`)}>
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
