import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import loginScreen from './LoginScreen';
import usersList from './UsersList';
import newUser from './AddUserScreen';
import detailScreen from './DetailsScreen';

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={loginScreen} />
        <Route exact path="/userslist" component={usersList}/>
        <Route exact path="/newuser" component={newUser}/>
        <Route excat path="/details" component={detailScreen}/>
      </Switch>
    </Router>
  )}

export default App;