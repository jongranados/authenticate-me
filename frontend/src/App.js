import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import  LoginFormPage  from "./components/LoginFormPage";
import { useDispatch } from 'react-redux';
import * as sessionActions from "./store/sessionSlice";
import { SignupFormPage } from './components/SignupFormPage';

function App() {
  // check to see if session user already exists
  const dispatch = useDispatch(); 
  const [isLoaded, setIsLoaded] = useState(false); 

  useEffect(() => { 
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true)); 
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route path="/login">
        <h1>Login Page</h1>
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <h1>Signup Page</h1>
        <SignupFormPage />
      </Route>
    </Switch>
  ); 
}

export default App;
