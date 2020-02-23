import React, { useState } from 'react';
import './home.scss';
import InputBox from '../../components/inputBox/inputBox';
import {Button} from '../../components/Button/button';
import {Link} from 'react-router-dom';
import axios from '../../axios_order'
interface homeProps{
  
}

const Home = (props:homeProps) => {
  return (
    <div>
      <h1>SocietyHub</h1>
      <section>
        <Link to='/SignUp'><Button color="primary" className="btn btn--primary">
                          Sign Up
        </Button></Link>
      </section>
      <section>
        <Link to='/login'><Button color="primary" className="btn btn--primary">
                          Login
        </Button></Link>
      </section>
    </div>
  );
};

export default Home;
