import React, { useState } from 'react';
import './login.scss';
import InputBox from '../../components/inputBox/inputBox';
import {Button} from '../../components/Button/button';
import axios from '../../axios_order';
import {Link} from 'react-router-dom';
interface loginProps{
  
}

const Login = (props:loginProps) => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const onEmail=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  }
  const onPassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
  }
  const onButton=()=>{
    axios.post('/login',null,{params:{
        email,
        password
      }})
      .then((response)=>{
          localStorage.setItem('login',JSON.stringify({
              login:true,
              token:response.data.token
          }))
      })
      .catch(error=>console.log(error))
  }
  return (
    <div>
      <h1>Login</h1>
      <section>
        <label>Email</label>
        <InputBox
        value={email}
        type="email"
        onChangeHandler={onEmail}
        />
      </section>
      <section>
        <label>Password</label>
        <InputBox
        value={password}
        type="password"
        onChangeHandler={onPassword}
        />
      </section>
      <section>
      <Link to='/dashboard'><Button color="primary" onClick={onButton} className="btn btn--primary">
                          Login
        </Button></Link>
      </section>
    </div>
  );
};

export default Login;
