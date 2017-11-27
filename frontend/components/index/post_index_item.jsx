import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props;
    console.log(this.state);
  }


  render(){

    return (
      <div className = 'i'>
        <li className='index-item'>
          <div className = 'post-top-text-area'>
            <p className = 'post-author'>
              {this.state.post.author.name}:
            </p>

            <p className ='post-description'>
              {this.state.post.description}
            </p>
          </div>

          <img src={this.state.post.img_url}
              alt={this.state.post.description}
              className = 'item-image'
            ></img>

          <button
            onClick={()=> this.state.likePost(this.state.post.id)}
          >
            Like Post
          </button>

          <button
            onClick={()=> this.state.unlikePost(this.state.post.id)}
          >
            Unlike Post
          </button>


        </li>


      </div>
    )
  }
}

export default PostIndexItem;
