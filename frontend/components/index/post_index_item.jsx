import React from 'react';

const PostIndexItem = ({post}) => {


  console.log('mypost:',post)


  return (
    <div>
      <li className='index-item'>

        {post.id}
        {post.author.username}

          {post.description}
          <img src={post.img_url} alt={post.description}></img>

      </li>


    </div>
  )

}

export default PostIndexItem;

// {post.id}
// {post.author.username}
