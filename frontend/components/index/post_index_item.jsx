import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div>
      <li className='index-item'>
          {post.description}
          {post.id}
          {post.author.username}
          {post.img_url}
      </li>


    </div>
  )

}

export default PostIndexItem;
