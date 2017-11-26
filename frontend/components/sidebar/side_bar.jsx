import React from 'react';
import NewPostForm from './new_post_form';

class SideBar extends React.Component {





  render(){


    const post = {description: 'puppy',img_url: 'aowiejfa',authorId: this.props.currentUser.id}

    return (
      <div>
        <h1>
          HELLO WORLD I AM SIDEBAR
        </h1>
          <button onClick={() => this.props.createPost(post)}>
            CREATE POST TEST
          </button>

          <NewPostForm createPost={this.props.createPost}/>


      </div>
    )
  }
}

export default SideBar;
