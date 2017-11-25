var React = require('react');
var PropTypes = React.PropTypes;

var UploadButton = React.createClass({

  upload: function(e){
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options,function(error,images){
      if (error === null){
        //this means the upload was successful
      } else {

      }
    });
  }


  render: function() {
    return (
      <button onClick={this.upload}> Upload Image </button>
    );
  }

});

module.exports =  ;
