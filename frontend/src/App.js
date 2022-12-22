import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import  LoginFormPage  from "./components/LoginFormPage";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <h1>App Academy</h1>
        <LoginFormPage />
      </Route>
    </Switch>
  );
}

export default App;
