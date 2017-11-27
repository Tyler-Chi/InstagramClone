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
      <AuthRoute path="/" component={SessionFormContainer} />
    </Switch>

    <div className = 'mainflex'>
      <ProtectedRoute path = '/' component={SideBar} />

      <ProtectedRoute exact path='/' component={IndexContainer} />
    </div>




    </div>

  </div>
);

export default App;
