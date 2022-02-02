import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import EditUser from "./components/EditUser";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestHome from "./components/TestHome";

const Routes = () => {

  // const auth = getAuth();
  // const user = auth.currentUser;
  
  const [user, setUser] = useState(getAuth().currentUser)
  const login = getAuth()
  onAuthStateChanged(login, (u) => {
    setUser(u);
  });
  
  return (
    <div>
      {/* {console.log('USER:', user)} */}
      {user ? (
      <Switch>
        <Route exact path="/" component = {TestHome} />
        <Route path="/users/:id/edit" component={EditUser} />
        <Route exact path="/users/:id" component={UserProfile} />
      </Switch>
       ):( 
      <Switch>
        <Route exact path="/" render={() => {
                return <Redirect to="/signin" />;
              }}
            />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Switch>
       )} 
    </div>
  );
  
  // return (
  //   <div>
  //     <Switch>
  //       <Route exact path="/" component = {TestHome} />
  //       <Route path="/users/:id/edit" component={EditUser} />
  //       <Route path="/users/:id" component={UserProfile} />
  //     </Switch>
  //     <Switch>
  //       <Route path="/signup" component={SignUp} />
  //       <Route path="/signin" component={SignIn} />
  //     </Switch>
  //   </div>
  // );
};

export default Routes;