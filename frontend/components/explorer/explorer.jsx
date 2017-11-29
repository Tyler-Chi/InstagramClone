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

    const sorted_posts = posts.sort(function(a,b){
      return (a.id - b.id)
    });

    if (this.props.ui.loading){
      return <p className='.loading-item'> loading </p>
    } else {

    return(
      <div className = 'explorer-area'>

          <ul className='explorerlist'>

            {
              sorted_posts.reverse().map ( post => (
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



}

export default Explorer;
