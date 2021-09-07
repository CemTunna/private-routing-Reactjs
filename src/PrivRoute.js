import React from 'react';
import { useSelector } from 'react-redux'; // to get data within reducer  from storage
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
  //we get component as a Component to use it like normal component, and rest just comes like that
  const { loading, isAuthenticated } = useSelector((state) => state.auth); //destructring
  return (
    <Route
      {...rest} // to implement other stuffs like 'exact' 'path'
      render={(
        props // render does the same thing as if component used as a child between routes
      ) =>
        !isAuthenticated && !loading ? ( // checks whether user authenticated or not
          <Redirect to='/login' /> //if not then redirects to login page
        ) : (
          <Component {...props} /> // if user is authenticated get to all the props to passed to that component
        )
      }
    />
  );
};

export default PrivateRoute;
