import React from 'react';
import './App.css';
import Account from "./Components/Account/AccountComponents/Account";
import SignInForm from "./Components/Auth/SignInForm";
import Plan from "./Components/Account/AccountComponents/Plan/Plan";
import {Route, Switch, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignInForm}/>
        <Route path='/' component={Account}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
