import React from 'react';

class NewPostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      img_url: "",
      authorId: this.props.currentUser.id,
      option: "Please choose a file to upload.",
      message: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
  }

  close(e){
    e.preventDefault()
    if (this.props.onClose){
      this.props.onClose();
    }
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
    this.close();
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

  }



  render() {

    if (this.props.isOpen === false ){
      return null;
    }

    return (
    <div className = 'form-backdrop' >

        <button onClick={this.props.onClose}
          className = 'close-button'
          >Close</button>





        <form className='new-post-form' onSubmit={this.handleSubmit}>
          <p>{this.props.errors}</p>

          <button type='cloud'
            onClick={this.upload}
            className = 'cloud-upload-button'
            >
            {this.state.option}
          </button>
          <p>{this.state.message}</p>





            <textarea

              ref="description"
              value= {this.state.description}
              placeholder="description"
              onChange={ this.update('description')}
              className = 'input-description'
            />




          <button className = 'new-post-submit-button'>add post</button>


        </form>

    </div>
    )
  }

}

export default NewPostForm;
