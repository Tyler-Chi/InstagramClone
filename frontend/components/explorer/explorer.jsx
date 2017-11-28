import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';
import ExplorerIndexItem from './explorer_index_item';

class Explorer extends React.Component {

  componentWillMount(){
    this.props.fetchAllPosts();
  }

  render(){
    console.log('explorer props',this.props);
    const posts = Object.values(this.props.entities.posts)

    return(
      <div className = 'explorer-area'>

        <h1> i am the explorer area</h1>
          <ul className='explorerlist'>

            {
              posts.map ( post => (
                <ExplorerIndexItem
                  key={post.id}
                  post={post}
                  likePost={this.props.likePost}
                  unlikePost={this.props.unlikePost}
                  history={this.props.history}
                  currentUser={this.props.currentUser}
                  createComment={this.props.createComment}
                  deleteComment={this.props.deleteComment}
                />
              ))
            }

          </ul>
      </div>

    )
  }



}

export default Explorer;
