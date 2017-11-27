import React from 'react';

class ProfileIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    if (this.props.post.lbcu){
      this.props.unlikePost(this.props.post.id)
      // .then(()=>this.setState({lbcu:false}))
    } else {
      this.props.likePost(this.props.post.id)
      // .then(()=>this.setState({lbcu: true}))
    }

  }

  render(){



    return (
      <li>

        <p> I AM AN PROFILE INDEX ITEM :D</p>

      </li>
    )



  }


}

export default ProfileIndexItem;
