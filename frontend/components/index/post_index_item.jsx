import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div>
      <li>
          {post.description}
          {post.id}
          {post.authorId}
      </li>


    </div>
  )

}

export default PostIndexItem;
