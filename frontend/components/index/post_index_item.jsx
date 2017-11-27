import React from 'react';

const PostIndexItem = ({post, likePost, unlikePost}) => {


  console.log('mypost:',post)


  return (
    <div className = 'i'>
      <li className='index-item'>

        <div className = 'post-top-text-area'>
          <p className='post-author'>{post.author.name}:</p>
          <p className='post-description'>{post.description}</p>
        </div>
        <img src={post.img_url} alt={post.description}
          className = 'item-image'
          ></img>


      </li>


    </div>
  )

}

        //
        // <button onClick={likePost(post.id)}>
        //   Like Post
        // </button>
        //
        // <button onClick={unlikePost(post.id)}>
        //   Unlike Post
        // </button>


export default PostIndexItem;
