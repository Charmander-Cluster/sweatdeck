import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { CreateWorkout }from './components'

const Routes = () => {

  // const isLoggedIn = useSelector(state => {
  //   return !!state.user.id
  // })


  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/signup" component={Signup} /> */}
      {/* {isLoggedIn && (
        <Switch> */}
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/create-workout" component={CreateWorkout} />
        {/* </Switch> */}
       {/* )} */}
      {/* <Route component={Login} />  */}
    </Switch>
  )
}

export default Routes
