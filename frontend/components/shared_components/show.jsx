import React from 'react';

class ShowPost extends React.Component {
  //in props, this needs createComment, deleteComment, createLike, deleteLike
  //also needs onClose
  //MOST IMPORTANTLY, IT NEEDS THE POST LOL

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      body: '',
      errors: '',
      username: this.props.currentUser.username
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({errors: '', body: ''})
    const newComment = Object.assign({}, this.state);
    const { createComment , post, currentUser } = this.props;
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

  deleteButton(comment){
    if (this.props.currentUser.username === comment.writer){
      return(
        <button onClick={()=>deleteComment(comment.id)}
          className='modal-comment-delete'
          >
          x
        </button>
      )
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



  handleClick(e){
    if (this.props.post.lbcu){
      this.props.unlikePost(this.props.post.id)
    } else {
      this.props.likePost(this.props.post.id)
    }
  }

  close(e){
    e.preventDefault()
    if (this.props.onClose){
      this.props.onClose();
    }
  }



  update(property){
    return e => this.setState({[property]: e.target.value    })
  }


  render(){

    let sorted_comments = [];

    if (this.props.post.comments)
      {
      let unsorted_comments = this.props.post.comments;

      sorted_comments = unsorted_comments.sort(function(a,b){
        return (a.id - b.id)
      });
    }

    if (this.props.isOpen === false){
      return null;
    }

    console.log('show props are...');
    console.log(this.props);


    return (
      <div className = 'show-backdrop'

        >



        <div
          className = 'show-modal-area'>
          <div className='show-modal-photo'>
            <img src={this.props.post.img_url}/>
          </div>

          <div className = 'modal-ui'>

            <button onClick = {this.props.onClose}
              className='close-modal-button'
              >
              X
            </button>

            <div className = 'modal-name-area'>
              <p>{this.props.post.author.name}</p>
            </div>

            <div className = 'modal-like-unlike'>

              <button onClick={this.handleClick}>
                {this.button()}
              </button>

              <p className = 'show-modal-likes'>
                Likes: {this.props.post.likes}
              </p>

            </div>

            <div className='modal-comment-list'>
              {
                sorted_comments.map(comment =>(
                  <div className='show-comment-delete'
                    key={comment.id}
                    >
                    <div className='show-comment-indv'>
                      {comment.writer}:{comment.body}
                    </div>

                    <div className='show-delete-button-area'>
                      {this.deleteButton(comment)}
                    </div>

                  </div>
                ))
              }

            </div>

            <form
              className='show-comment-form'
              onSubmit={this.handleSubmit}
              >
              <textarea
                className = 'show-input-area'
                type='text'
                ref='body'
                value= {this.state.body}
                placeholder="comment..."
                onChange={ this.update('body')}
                >

              </textarea>

              <button
                className='show-submit'
                type="submit">
                Submit Comment
              </button>
            </form>



          </div>

        </div>
      </div>
    )



  }
}

export default ShowPost;
