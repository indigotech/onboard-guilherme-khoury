import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import LoginScreen from './LoginScreen';
import NewPage from './NewPage';

function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/newpage" component={NewPage}/>
      </Switch>
    </Router>
  )}

export default App;