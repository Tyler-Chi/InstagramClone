import React from 'react';

class ShowPost extends React.Component {
  //in props, this needs createComment, deleteComment, createLike, deleteLike
  //also needs onClose

  close(e){
    e.preventDefault()
    if (this.props.onClose){
      this.props.onClose();
    }
  }

  render(){
    console.log('show props are...');

    if (this.props.isOpen === false){
      return null;
    }

    return (
      <div className = 'show-backdrop'>





      </div>
    )



  }




}
