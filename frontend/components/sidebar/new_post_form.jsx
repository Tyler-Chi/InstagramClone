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
    this.updateUrl = this.updateUrl.bind(this);
    this.upload = this.upload.bind(this);
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

  updateUrl(cloudUrl){
      console.log('i am trying to update the url :D')

    // this.setState({img_url: cloudUrl});
      this.setState({img_url: 'http://res.cloudinary.com/deaiyjjnf/image/upload/v1511668463/yxxrbwo1dtvebu2sauks.jpg'});
      console.log('current state:',this.state);
  }



  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options,function(error,results)
    {
      console.log('results:',results);
      console.log('errors:',error);

      if (error === null){
        console.log('i got past the if statement')
        return results[0].url;
      }
    });
  }



  render() {

    console.log(this.state)

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
          >
          Choose File..
        </button>



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
