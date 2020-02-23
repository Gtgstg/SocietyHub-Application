import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import SignUp from './container/signUp/signUp';
import Login from './container/login/login';
import Home from './container/home/home';
import Dashboard from './container/dashboard/dashboard';
const App=()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact render={()=><Home></Home>}/>
        <Route path='/signup' exact render={()=><SignUp></SignUp>}/>
        <Route path='/login' exact render={()=><Login></Login>}/>
        <Route path='/dashboard' exact render={()=><Dashboard></Dashboard>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
