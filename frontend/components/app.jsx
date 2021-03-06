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
import ExplorerContainer from "./explorer/explorer_container";

// import ProfilePage from './profilepage/profilepage_container';


const Test = () => (
  <div>
      <div className = 'mainflex'>
        <ProtectedRoute exact path='/dashboard' component={IndexContainer} />
      </div>

      <div className = 'profileflex'>

        <ProtectedRoute path = '/user/:username' component={ProfilePage} />
      </div>

      <div className = 'explorerflex'>

        <ProtectedRoute exact path='/explorer' component={ExplorerContainer} />

      </div>




  </div>
)


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

      <ProtectedRoute path="/" component={Test} />


    </Switch>





    </div>

  </div>
);
    // <AuthRoute path="/" component={SessionFormContainer} />
export default App;


// <AuthRoute path = "/"
//   component={SessionFormContainer} />
