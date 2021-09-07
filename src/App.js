import React, { Fragment } from 'react';
import PrivateRoute from './PrivRoute';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/dashboard' component={Dashboard} />{' '}
      {/* path and component will be passed to PrivateRoute as a prop and if user is  authenticated privRoute component will protect route */}
    </Fragment>
  );
};

export default App;
