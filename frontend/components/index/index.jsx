import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import PostIndexItem from './post_index_item'

class Index extends React.Component {

  componentWillMount(){
    this.props.fetchPosts();
  }


  render() {
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
          />
          )
        )
        }
        </ul>

    </div>
    )
  }

}

export default Index;
