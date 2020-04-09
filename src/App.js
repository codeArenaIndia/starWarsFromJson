import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route, Redirect  } from "react-router-dom";
import Planets from './pages/Planets';
import Login from './pages/Login';
import Auth from './Components/Helper/Auth'
import { createBrowserHistory } from 'history'

export default function App(){
  const [redirctTo, setRedirctTo] = useState(false);
  useEffect(()=>{
    if (Auth()) {
      setRedirctTo(true);
    }
  },[]);
  return(
    <div className="App">
        <Router  history={createBrowserHistory}>
        {
          redirctTo ? <Redirect to="/planets"/> :  <Redirect to="/login"/>
        }
        <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
          </Switch>
        </Router>
    </div>
  )
}