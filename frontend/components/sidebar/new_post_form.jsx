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
    // this.update = this.
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = Object.assign({}, this.state);



    this.props.createPost(newPost).then(
      () => this.setState({
        description: "",
        img_url: "",
        authorId: this.props.currentUser.id
      })
    )
  }


  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  // updateUrl(cloudiranyUrl)
  // this.setState({img_url: cloudiranyUrl.url})

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options,function(error,results)

    // .then(this.updateUrl(result[0].url))

    {
      console.log('results:',results);
      console.log('error?',error);
      if (error === null){
        this.state.img_url = results[0].url;
      }
    });
  }



  render() {


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

        <button type='cloud'
          onClick={this.upload}
          >Choose File..</button>



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
