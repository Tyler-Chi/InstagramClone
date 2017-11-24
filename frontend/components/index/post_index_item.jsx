import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div>
      <p>
        {post.description}
      </p>
    </div>
  )

}

export default PostIndexItem;
