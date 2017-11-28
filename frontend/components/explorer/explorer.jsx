import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';

class Explorer extends React.Component {

  componentWillMount(){
    this.props.fetchAllPosts();
  }

  render(){

    return(
      <div className = 'explorer-area'>

        <p> I AM THE EXPLORER AREA :D</p>


      </div>

    )
  }



}

export default Explorer;
