import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      body: 'a',
      writer_id: this.props.currentUser.id,
      post_id: this.props.post.id
    }

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

  handleSubmit(e){

  }

  update(property){
    return e => this.setState({[property]: e.target.value    })
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
    console.log('pii props',this.props);

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


          <form
            className='new-comment-form'
            onSubmit={this.handleSubmit}
            >

            <textarea
              ref='body'
              value= {this.state.body}
              placeholder="comment..."
              onChange={ this.update('body')}
              className='body-input'
              >

            </textarea>


          </form>

        </li>
    )
  }
}

export default PostIndexItem;
