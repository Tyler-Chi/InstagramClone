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

    if (nextProps.location !== this.props.location){
      this.state = {
        username: '',
        password: '',
        email: ''
      };
      this.props.clearErrors();
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
    this.props.processForm(user).then(() => this.props.history.push('/dashboard'));
  }

  handleDemo(e){
    e.preventDefault();
    const user = {username: 'Artemis', password: 'testpassword'};
    this.props.login(user).then(() => this.props.history.push('/dashboard'));
  }

  navLink() {
    if (this.props.formType === 'login') {

      return (
        <div className = 'switcher'>
          <Link to="/signup" className = "switchlink">sign up</Link>
        </div>

      );

    } else {

      return (
      <div className = 'switcher'>
        <Link to="/login"className = "switchlink">log in</Link>
      </div>

      )

    }
  }

  renderErrors() {
    return(
      <ul className = 'errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    console.log(this.props)

    let actionType;
    if (this.props.formType === ''){
      actionType = 'signup';
    } else {
      actionType = this.props.formType;
    }




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
      <div className="login-photobox">

        <div className = 'login-form-container'>


        <form onSubmit={this.handleSubmit} className="login-form-box">

          <p className='form-header'>
            Image-in
          </p>



          <br/>

        <div className = 'pleaseblank'>
          Please {actionType} or {this.navLink()}
        </div>



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

            <input type="submit" value="Submit"
                className = "submit-button"
                />

              <button onClick={this.handleDemo} className = "submit-button"> Demo </button>
          </div>

          <br />

      {this.renderErrors()}

        </form>
      </div>



      </div>
    );
  }
}

export default withRouter(SessionForm);
