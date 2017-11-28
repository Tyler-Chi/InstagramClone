import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import PostIndexItem from './post_index_item'

class Index extends React.Component {

  componentWillMount(){
    this.props.fetchPosts();
  }


  render() {


    if (!this.props.entities.posts){
      return(
        <div> LOADING </div>
      )
    } else {

      const posts = Object.values(this.props.entities.posts)

    return (




    <div className='index-area'>

        <ul className='indexlist'>
        {
        posts.map( post => (
          <PostIndexItem
            key={post.id}
            post={post}
            likePost={this.props.likePost}
            unlikePost={this.props.unlikePost}
            history={this.props.history}
            createPost={this.props.createPost}
            deletePost={this.props.deletePost}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            deleteComment={this.props.deleteComment}
          />
          )
        )
        }
        </ul>

    </div>
    )
  }
  }
}

export default Index;
