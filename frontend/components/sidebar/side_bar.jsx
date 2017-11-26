import React from 'react';

class SideBar extends React.Component {





  render(){

    const post = {description: 'puppy',img_url: 'aowiejfa',authorId: 18}

    return (
      <div>
        <h1>
          HELLO WORLD I AM SIDEBAR

          <button onClick={() => this.props.createPost(post)}>
            CREATE POST TEST
          </button>

        </h1>
      </div>
    )
  }
}

export default SideBar;
