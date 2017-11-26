import React from 'react';

class NewPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "a",
      img_url: "",
      authorId: currentUser.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = Object.assign({}, this.state);

    this.props.createPost(newPost).then(
      () => this.setState({
        description: "",
        img_url: "",
        authorId: currentUser.id
      })
    )
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }



  render() {


    console.log('myerrors',this.props.errors)
    return (
    <div>



      <h1>the name's post form. NEW post form.</h1>
      current user: {currentUser.id}
      author id: {this.state.authorId}

      <br/>
      <br/>
      <br/>


      <form className='new-post-form' onSubmit={this.handleSubmit}>
        <p>{this.props.errors}</p>
        <label>Image Url
          <input
            ref="img_url"
            value= {this.state.img_url}
            placeholder="image url"
            onChange={ this.update('img_url')}
          />
        </label>
            <br/>
        <label>Description
          <input
            ref="description"
            value= {this.state.description}
            placeholder="description"
            onChange={ this.update('description')}
          />
        </label>


          <br/>

        <button className = 'new-post-submit-button'>add post</button>
      </form>

    </div>
    )
  }

}

export default NewPostForm;
