import React, { useState } from 'react';
import './login.css';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const eyeSvgClosed = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
      <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" fill="#ffffff"></path>
    </svg>
  );

  const eyeSvgOpen = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
      <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" fill="#ffffff"></path>
      </g>
    </svg>
  );

  return (
    <div className="body">
      <form className="form signupForm">
        <h2 className="h2">GLITCHWARE</h2>
        <div className="flex-column">
          <label className="email">Name</label>
        </div>
        <div className="inputForm">
          <input type="text" className="input" placeholder="Enter your Name" />
        </div>
        <div className="flex-column">
          <label className="email">Email</label>
        </div>
        <div className="inputForm">
          <input type="text" className="input" placeholder="Enter your Email" />
        </div>
        <div className="flex-column">
          <label>Password</label>
        </div>
        <div className="inputForm">
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="input"
            placeholder="Enter your Password"
            id="password"
          />
          <div
            onClick={togglePasswordVisibility}
            style={{ position: 'absolute', right: '10px', cursor: 'pointer' }}
          >
            {passwordVisible ? eyeSvgOpen : eyeSvgClosed}
          </div>
        </div>
        <button className="button-submit signup">Sign Up</button>
        
              </form>
    </div>
  );    
};

export default SignUp;
