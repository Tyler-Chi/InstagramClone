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
import IndexContainer from "./index/indexcontainer";
import SideBar from './sidebar/side_bar_container';
import ProfilePage from './profilepage/profilepage_container';

// import ProfilePage from './profilepage/profilepage_container';


const App = () => (
  <div className = 'main'>

    <div className = 'main-area'>

    <div className = "login-signup">
      <Route path = "/" className = "nav-container"
        component ={GreetingContainer} />
    </div>



    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path = "/"
        component={SessionFormContainer} />
    </Switch>

    <div className = 'mainflex'>
      <ProtectedRoute path = '/dashboard' component={SideBar} />

      <ProtectedRoute exact path='/dashboard' component={IndexContainer} />
    </div>

    <div className = 'profileflex'>
      <ProtectedRoute path = '/user/:username' component={SideBar} />
      <ProtectedRoute path = '/user/:username' component={ProfilePage} />
    </div>




    </div>

  </div>
);
    // <AuthRoute path="/" component={SessionFormContainer} />
export default App;
