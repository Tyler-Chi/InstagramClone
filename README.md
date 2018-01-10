# README

## Image-in

Image-in is an Instagram clone, which is a web application that allows users to upload photos, view other users photos, follow other users, as well as like/comment on posts.

## Technology

The Backend of this web application relied on Ruby on Rails, as well as PostgreSQL. These two technologies handled managing the database, and sending the information to the front end.

The Frontend of this web application utilized ReactJS/Redux, HTML and CSS.

## Other Libraries and Tools

-BCrypt
-JSON/JBUILDER
-React-Router
-Lodash
-Webpack
-Cloudinary

## Features

-Users can upload photos via Cloudinary, which stores the actual image file. The url of the uploaded image is obtained from Cloudinary, and stored in Image-In's database. This vastly lowers the space requirement of this web app's database.

-Users have three places to view pictures: the Explorer, the Dashboard, and their own Profile pages. 

-On the Explorer, users can see access all posts in the database. 

-In the Dashboard, posts are filtered based on whom the current user is currently following.

-Profile pages only show the posts of that particular user. On this page, other users have the opportunity to follow that user.

-Users are able to **like** and **comment** on each other's posts. Comments appear in chronological order. Users are also able to **delete** their own comments, but not the comments of other users.

-Users are also able to follow and unfollow other users.

![alt-text](https://s3-us-west-1.amazonaws.com/bandstandapp-dev/tylersstuff/ImageInGif.gif)

## Code Example:

At various points in this project, a component about to mount had to retrieve a sizeable amount of data from the database. I was running into issues where the component would try mounting before all of the information was properly fetched, so I implemented a loading circle to ensure that the frontend would completely fetch all the information it needed before trying to render anything with that informaiton.

```
export const fetchPosts = () => dispatch => {
  dispatch(currentlyLoading());

  PostApiUtil.getPosts().then(posts => dispatch(receivePosts(posts)))

}
```

Prior to making the ajax request to the backend ( PostApiUtil.getPosts() ), I dispatch an action called currentlyLoading, which sets a slice of the state ( {ui{loading: _ } ) to true. The major components in this project all listen to that slice of state, and render a loading circle if it is true. Once the ajax call is made and all the information comes back, the receivePosts action sets ui.loading to false, and updates the state with the necessary information. This overall change in state triggers a rerender, causing the loading circle to dissappear and instead making the component display the information that was just retrieved.


## What I learned during this project

This project was my first independent React/Redux application. My understanding of React/Redux improved dramatically during the course of this project. At first, I had troulble piecing together the various aspects of React/Redux, and had to rely heavily on documentation and prior coding examples. After doing this for two weeks though, I am confident in my understanding of the React/Redux cycle, and how it works with the Rails backend in order to create a fully functioning web application.

It was extremely beneficial for me running into bugs, because they forced me to get better at reading documentation, and gave me a much deeper understanding of how the entire system works.

## One of the most interesting (and frusturating) bugs I ran into!

In the course of this project, I had to make an action that fetchs all of a users posts, as well as the posts of their followers, in order to render them into the dashboard. For some reason, all the posts' author ID's would default to the ID of the current user. I realized the problem was in my backend, in my API::Posts controller:

```
  def index
    @user = current_user
    @posts = @user.posts
    following = current_user.is_following
    following.each do |followed|
      @posts.concat(followed.posts)
    end

  end
  ```
  When rails sees the third line of code, it assumes that any post I concatonate onto @posts should have the current user as the author ID. This is why when the information came to the front end, the information was incorrect. The simple fix was this:


 ```
   def index
    @user = current_user
    @posts = []
    @posts.concat(@user.posts)
    following = current_user.is_following
    following.each do |followed|
      @posts.concat(followed.posts)
    end
  end
  ```

  By initializing @posts to an empty array at first, instead of @user.posts, rails does not assume that I want all of the author ID's of every post to be that of my current user.

 ##Future Improvements
 I want to include tagging and a search system, so users can search for other users as well as search for specific tags.
 I also want to go back and refactor some of my code (including CSS). I learned so much over the course of this project that there is a noticeable difference between the quality of my code at the beginning of my project compared to the quality of my code towards the end of the project.
