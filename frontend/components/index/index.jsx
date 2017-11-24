import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router';

class Index extends React.Component {




  render(){
    console.log(this.props.currentUser)
    return (
    <h1>
      HELLO WORLD I AM PUPPER
    </h1>
    )
  }
}

export default Index;
