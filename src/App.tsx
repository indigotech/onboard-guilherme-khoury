import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import LoginScreen from './LoginScreen';
import UsersList from './UsersList';
import NewUser from './AddUserScreen';

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/userslist" component={UsersList}/>
        <Route exact path="/newuser" component={NewUser}/>
      </Switch>
    </Router>
  )}

export default App;