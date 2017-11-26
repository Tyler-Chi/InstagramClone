import React from 'react';

class NewPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "a",
      img_url: "",
      authorId: currentUser.id,
      option: "Please choose a file to upload.",
      message: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPost = Object.assign({}, this.state);

    this.props.createPost(newPost).then(
      () => this.setState({
        description: "",
        img_url: "",
        authorId: this.props.currentUser.id,
        option: "Please choose a file to upload."
      })
    )
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  upload(e){
    e.preventDefault();

    cloudinary.openUploadWidget(window.cloudinary_options,function(error,results)
    {
      if (error === null){
        this.state.img_url = results[0].url;
        this.state.option = "Click here if you would like to change the upload file";
        this.state.message = "Successful Upload!"
      }
    }.bind(this));

    this.forceUpdate();
  }



  render() {

    console.log(this.state)

    return (
    <div className = 'new-post-form-container'>
      <div className = 'photobox'>
      <form className='new-post-form' onSubmit={this.handleSubmit}>
        <p>{this.props.errors}</p>

        <button type='cloud'
          onClick={this.upload}
          className = 'cloud-upload-button'
          >
          {this.state.option}
        </button>
        <p>{this.state.message}</p>


            <br/>
        <label>Description
          <input
            ref="description"
            value= {this.state.description}
            placeholder="description"
            onChange={ this.update('description')}
            className = 'input-description'
          />
        </label>


          <br/>

        <button className = 'new-post-submit-button'>add post</button>
      </form>

      </div>
    </div>
    )
  }

}

export default NewPostForm;
