import { Link } from '@mui/material';
import React from 'react';
import '../Styles/SignUp.css';

function SignUp() {
  return (
    <div className='signup'>
     <Link to='/home'>jjj</Link>
   <div>
  <div className="container">
    <div className="signup-inner">
      <h1 className='signUp-title'>Sign Up</h1>
      <p>create a new account</p>
      <form>
        <label htmlFor="fullName">Full Name</label>
        <input type="fullName" name="name" id="fullName" />
        <label htmlFor="email">Email</label>
        <input type="email" name="name" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" name="confirm" id="confirm" />
        <div className="accept">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I agree to the <a href="#">terms of service</a><a /></label><a>
          </a></div><a>
 
          <input className="button" type="button" defaultValue="Sign Up" />

        </a></form></div><a>
      <div className="right" />
    </a></div><a>
  </a></div>

    </div>
  )
}

export default SignUp