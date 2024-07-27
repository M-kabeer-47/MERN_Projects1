import React, { useState } from 'react';
import './login.css';

const Login = () => {
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
      <form className="form">
        <h2 className="h2">GLITCHWARE</h2>
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
        <button className="button-submit">Log in</button>
        <p className="p acc">Don't have an account? <span className="span">Sign Up</span></p>
        <p className="p line">Or With</p>
        <div className="flex-row">
          <button className="btn google">
            <svg
              version="1.1"
              width="20"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
            >
              <path
                style={{ fill: '#FBBB00' }}
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                C103.821,274.792,107.225,292.797,113.47,309.408z"
              ></path>
              <path
                style={{ fill: '#518EF8' }}
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
              ></path>
              <path
                style={{ fill: '#28B446' }}
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
              ></path>
              <path
                style={{ fill: '#F14336' }}
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                C318.115,0,375.068,22.126,419.404,58.936z"
              ></path>
            </svg>
            Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
