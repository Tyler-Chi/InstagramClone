import React from 'react';

class NewPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      img_url: "",
      authorId: currentUser.id
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = Object.assign({}, this.state);
    this.props.createPost(post).then(
      () => this.setState({
        description: "",
        img_url: "",
        authorId: currentUser.id
      })
    )
  }





  render() {
    return (
    <div>
      <h1>the name's post form. NEW post form.</h1>
      current user: {currentUser.id}
      author id: {this.state.authorId}
    </div>
    )
  }

}

export default NewPostForm;
