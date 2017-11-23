import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//
// <nav className = "nav-container">
//
//
//   <GreetingContainer />
//
// </nav>


const App = () => (
  <div className = 'main'>

    <div className = 'main-area'>

    <div className = "login-signup">




      <AuthRoute path = "/" className = "nav-container" component={GreetingContainer} />


      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />

    </div>

    </div>

  </div>
);

export default App;
