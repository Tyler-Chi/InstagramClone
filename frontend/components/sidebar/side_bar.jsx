import React from 'react';
import NewPostForm from './new_post_form';

class SideBar extends React.Component {





  render(){


    const post = {description: 'puppy',img_url: 'aowiejfa',authorId: this.props.currentUser.id}

    return (
      <div className="sidebar-container">


          <NewPostForm createPost={this.props.createPost} errors={this.props.errors}
          currentUser = {this.props.currentUser}
          />


      </div>
    )
  }
}

export default SideBar;
