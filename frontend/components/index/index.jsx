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
      <div className='index-elements'>
        <ul>
        {
        posts.map( post => (
          <PostIndexItem key={post.id} post={post} />
          )
        )
        }
        </ul>
      </div>
    </div>
    )
  }

}

export default Index;
