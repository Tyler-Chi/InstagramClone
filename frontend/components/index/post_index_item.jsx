import React from 'react';

class PostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: '',
      errors:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({errors: ''})
    e.preventDefault();
    const newComment = Object.assign({},this.state);
    const { createComment, post, currentUser } = this.props;

    if (this.state.body !== ''){
      createComment(post.id,this.state.body).then(
        () => this.setState({
          body: '',
          writer_id: currentUser.id,
          post_id: post.id
        })
      );

    } else {
      this.setState({errors: 'Comment body cannot be empty'})
    }
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
    console.log('pii post props',this.props.post);

    return (
        <li className='index-item'>
          <div className = 'pii-top-area'>
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
          </div>

          <div className= 'pii-bottom-area'>

            <div className='likes-area'>
              <button
                className = 'like-button'
                onClick={this.handleClick}
                >
                {this.button()}
              </button>

              <p className = 'numlikes'>likes: {this.props.post.likes}</p>
            </div>

            <button type='view'> view all comments({this.props.post.numcomments})</button>

            <p> placeholder for top comments </p>


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

              <button className='comment-submit'> submit comment</button>
            </form>

            <p>{this.state.errors}</p>
          </div>
        </li>
    )
  }
}

export default PostIndexItem;
