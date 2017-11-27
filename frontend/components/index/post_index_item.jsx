import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props;

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    if (this.state.post.lbcu){
      this.state.unlikePost(this.state.post.id)
      // .then(()=>this.setState({lbcu:false}))
    } else {
      this.state.likePost(this.state.post.id)
      // .then(()=>this.setState({lbcu: true}))
    }

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
            onClick={this.handleClick}
            >
            BORK
          </button>



          <p>
            {this.state.post.lbcu}
            hello world
            {this.state.post.likes}
          </p>

        </li>
      </div>
    )
  }
}

export default PostIndexItem;

// <button
//   onClick={()=> this.state.likePost(this.state.post.id)}
// >
//   Like Post
// </button>
//
//
// <button
//   onClick={()=> this.state.unlikePost(this.state.post.id)}
// >
//   Unlike Post
// </button>
