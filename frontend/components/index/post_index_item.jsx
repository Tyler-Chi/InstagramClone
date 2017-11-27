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

  stuff(){
    return (
      <h1> hello world</h1>
    )
  }

  render(){

    return (
        <li className='index-item'>
          <div className = 'post-top-text-area'>
            <p className = 'post-author'>
              {this.props.post.author.name}:
            </p>

            {this.stuff()}

            <p className ='post-description'>
              {this.props.post.description}
            </p>
          </div>

          <img src={this.props.post.img_url}
              alt={this.props.post.description}
              className = 'item-image'
            ></img>

          <button
            onClick={this.handleClick}
            >
            THE BUTTON
          </button>



          <p>
            {this.props.post.lbcu}
            {this.props.post.likes}
          </p>

        </li>
    )
  }
}

export default PostIndexItem;
