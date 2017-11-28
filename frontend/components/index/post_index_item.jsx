import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props){
    super(props);


    this.handleClick = this.handleClick.bind(this);
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

  button(){
    if (this.props.post.lbcu){
      return (
        <div>
          Unlike
        </div>
      )
    } else {
      return (
        <div>
          Like
        </div>
      )
    }
  }


  render(){

    return (
        <li className='index-item'>
          <div className = 'post-top-text-area'>


            <button
              className='post-author'
              onClick={() => this.props.history.push(`/user/${this.props.post.author.name}`)}
              >
              {this.props.post.author.name}:
            </button>




            <p className ='post-description'>
              {this.props.post.description}
            </p>
          </div>

          <img src={this.props.post.img_url}
              alt={this.props.post.description}
              className = 'item-image'
            ></img>

          <button
            className = 'pii-button'
            onClick={this.handleClick}
            >
            {this.button()}
          </button>



          <p className = 'numlikes'>likes: {this.props.post.likes}</p>
          <p className='numcomments'>comments: {this.props.post.numcomments}</p>
          <p>view comments</p>
          <p>add comment</p>

          <form>
            
          </form>

        </li>
    )
  }
}

export default PostIndexItem;
