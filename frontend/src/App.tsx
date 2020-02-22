import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import SignUp from './container/signUp/signUp';
import Login from './container/login/login';

const App=()=> {
// const [data,setData]= useState<any>(null);
// const createBlogPost=()=> {
//     return fetch('http://api.symfony-3.dev/app_dev.php/posts', {
//         method: 'POST',
//         mode: 'CORS',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => {
//         return res;
//     }).catch(err => err);
// }
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/signup' exact render={()=><SignUp></SignUp>}/>
        <Route path='/login' exact render={()=><Login></Login>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
