import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';




const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (



    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )


  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);


//AuthRoute redirects you to the home page redirects you to /.
//Authroute...i

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
