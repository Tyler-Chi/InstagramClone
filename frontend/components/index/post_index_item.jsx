import React from 'react';
import ShowPost from '../shared_components/show';



class PostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      body: '',
      errors:'',
      username: this.props.currentUser.username,
      isModalOpen: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(){
    this.setState({ isModalOpen: true})
  }

  closeModal(){
    this.setState({ isModalOpen:false })
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
      e.preventDefault();
    console.log('submit called');
    this.setState({errors: '',body: ''})

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

  deleteButton(comment){
    if (this.props.currentUser.username === comment.writer){
      return(
        <button onClick={()=>deleteComment(comment.id)}
          className='delete-comment-button'
          >
          x
        </button>
      )
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


      let unsorted_comments = this.props.post.comments;
      let sorted_comments = unsorted_comments.sort(function(a,b){
        return (a.id - b.id)
      });


    return (
        <li className='eii'>
          <div className = 'pii-top-area'>
              <div className = 'e-post-top-text-area'>
                <button
                  className='e-post-author'
                  onClick={() => this.props.history.push(`/user/${this.props.post.author.name}`)}
                  >
                  {this.props.post.author.name}:
                </button>
                <p className ='e-post-description'>
                  {this.props.post.description}
                </p>
              </div>

            <button
              className = 'e-image-area'
              onClick={()=>this.openModal()}
              >

            <img src={this.props.post.img_url}
              alt={this.props.post.description}
              className = 'item-image'
              ></img>
          </button>

              <ShowPost
                isOpen = {this.state.isModalOpen}
                createComment = {this.props.createComment}
                deleteComment = {this.props.deleteComment}
                currentUser = {this.props.currentUser}
                likePost = {this.props.likePost}
                unlikePost = {this.props.unlikePost}
                onClose={()=> this.closeModal()}
                post={this.props.post}
                history= {this.props.history}
              >

              <button onClick = {() => this.closeModal()}>
                Close
              </button>

            </ShowPost>






          </div>

          <div className= 'eii-bottom-area'>

            <div className='likes-area'>
              <button
                className = 'like-button'
                onClick={this.handleClick}
                >
                {this.button()}
              </button>

              <p className = 'numlikes'>likes: {this.props.post.likes}</p>
            </div>


            <div className = 'top-comments'>
              <button type='view'
                > comments ({this.props.post.numcomments})</button>
            </div>


            <div className ="e-comment-area">
              {sorted_comments.map(comment => (

                <div className="comment-and-delete"
                  key={comment.id}
                  id='comment-list'
                  >
                  <div className='e-individual-comment'

                    >
                    <button
                      className='comment-author'
                      onClick={() => this.props.history.push(`/user/${comment.writer}`)}
                      >
                      {comment.writer}:
                    </button>
                    <p className = 'e-commeny-body'>{comment.body}</p>
                  </div>

                  <p className = 'e-comment-x'>
                    {this.deleteButton(comment)}
                  </p>
                </div>

              )
            )

            }
            </div>


            <form
              className='new-comment-form'
              onSubmit={this.handleSubmit}
              >
              <input
                type='text'
                ref='body'
                value= {this.state.body}
                placeholder="comment..."
                onChange={ this.update('body')}
                className='body-input'
                id="comment-input"
                >

              </input>

              <button
                type="submit"
                className='comment-submit'>
              </button>




            </form>

            <p>{this.state.errors}</p>
          </div>
        </li>
    )
  }

}

export default PostIndexItem;
