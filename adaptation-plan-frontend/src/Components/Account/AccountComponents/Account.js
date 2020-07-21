import React from 'react';
import { Route, Switch } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import Plan from "./Plan/Plan";
import News from "./News/News";
import Notif from "./Notifications/Notif";
import Profile from "./Profile/Profile";

function Account() {
  return (
    <div>
      <AccountHeader/> {/* An accountHeader for all components as a header*/}
      <Switch>
        <Route exact path='/plan' component={Plan}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/notifications' component={Notif}/>
        <Route exact path='/profile' component={Profile}/>
      </Switch>
    </div>
  );
}

export default Account;
