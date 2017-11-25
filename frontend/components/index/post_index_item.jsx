import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div className = 'i'>
      <li className='index-item'>

        <div className = 'post-text-area'>
          <p className='post-author'>{post.author.name}:</p>
          <p className='post-description'>{post.description}</p>
        </div>
        <img src={post.img_url} alt={post.description}></img>

      </li>


    </div>
  )

}

export default PostIndexItem;
