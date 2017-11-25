import React from 'react';

class SideBar extends React.Component {





  render(){

    const post = {description: 'createtest', img_url: 'createtest', authorId: 18}

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
