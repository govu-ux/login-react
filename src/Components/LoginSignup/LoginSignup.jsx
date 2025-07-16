import React, { useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className={`scene ${action === "Sign Up" ? "flipped" : ""}`} id="scene">
      <div className="card">
        {/* Login Side */}
        <div className="container login-container">
          <div className="header">Login</div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="email" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="password" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
          <div className="submit-container">
            <div className="submit" onClick={() => setAction("Sign Up")}>Sign Up</div>
          </div>
        </div>

        {/* Sign Up Side */}
        <div className="container register-container">
          <div className="header">Sign Up</div>
          <div className="underline"></div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="user" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input">
              <img src={email_icon} alt="email" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={password_icon} alt="password" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={() => setAction("Login")}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
