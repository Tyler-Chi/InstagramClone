import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div>
      <p>
        {post.id}
      </p>
    </div>
  )

}

export default PostIndexItem;
