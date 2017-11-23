import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
  <div className = 'main'>

    <nav className = "nav-container">

      <Link to="/login" className="nav-bar-button">
        Image-in
      </Link>

      <GreetingContainer />

    </nav>


    <div className = 'main-area'>

    <Switch className = "login-signup">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>

    </div>








  </div>
);

export default App;
