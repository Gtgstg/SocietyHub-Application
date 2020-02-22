import React, { useState } from 'react';
import './signUp.scss';
import InputBox from '../../components/inputBox/inputBox';
import {Button} from '../../components/Button/button';
import {Link} from 'react-router-dom';
interface signUpProps{
  
}

const SignUp = (props:signUpProps) => {
  const [firstName,setFirstName]=useState<string>("");
  const [lastName,setLastName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const onFirstName=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setFirstName(event.target.value)
  }
  const onLastName=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setLastName(event.target.value)
  }
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
      <h1>Signup</h1>
      <section>
        <label>FirstName</label>
        <InputBox
        value={firstName}
        type="text"
        onChangeHandler={onFirstName}
        />
      </section>
      <section>
        <label>LastName</label>
        <InputBox
        value={lastName}
        type="text"
        onChangeHandler={onLastName}
        />
      </section>
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
        <Link to='/login'><Button color="primary" onClick={onButton} className="btn btn--primary">
                          Sign Up
        </Button></Link>
      </section>
    </div>
  );
};

export default SignUp;
