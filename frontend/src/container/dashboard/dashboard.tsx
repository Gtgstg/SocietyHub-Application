import React, { useState } from 'react';
import './dashboard.scss';
import InputBox from '../../components/inputBox/inputBox';
import {Button} from '../../components/Button/button';
import {Link} from 'react-router-dom';
import axios from '../../axios_order'
interface dashboardProps{
  
}

const Dashboard = (props:dashboardProps) => {
  
  const onButton=()=>{
    localStorage.clear();
  }
  return (
    <div>
      <h1>Dashboard</h1>
      
      <section>
        <Link to='/'><Button color="primary" onClick={onButton} className="btn btn--primary">
                          LogOut
        </Button></Link>
      </section>
    </div>
  );
};

export default Dashboard;
