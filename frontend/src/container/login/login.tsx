import React, { useState } from 'react';
import './login.scss';
import InputBox from '../../components/inputBox/inputBox';
import {Button} from '../../components/Button/button';

interface signUpProps{
  
}

const SignUp = (props:signUpProps) => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const onEmail=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
  }
  const onPassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(event.target.value)
  }
  const onButton=()=>{
    
  }
  return (
    <div>
      <h1>Login</h1>
      <section>
        <label>Email</label>
        <InputBox
        value={email}
        type="text"
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
        <Button color="primary" onClick={onButton} className="btn btn--primary">
                          Login
        </Button>
      </section>
    </div>
  );
};

export default SignUp;
