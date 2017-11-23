import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleDemo(e){
    e.preventDefault();
    const user = {username: 'Maggie', password: 'maggiepassword'};
    this.props.login(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" className = "switchlink">sign up instead</Link>;
    } else {
      return <Link to="/login"className = "switchlink">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let email;

    if (this.props.formType !=='login'){
      email =


            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder ='email'
            />

    } else {
      email = <div></div>;
    }


    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <p className='form-header'>
            Image-in
          </p>



          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>

              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder='username'
              />

        {email}

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder = 'password'
              />

            <br/>
            <br/>
            <br/>

            <div >

              <input type="submit" value="Submit"
                className = "submit-button"
                />

            </div>

          </div>
          <button onClick={this.handleDemo} className = "submit-button"> Demo </button>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
