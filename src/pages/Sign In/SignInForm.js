import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg'
import '../Sign Up/sign-up.css';
import './sign-in.css';
const SignInForm = () => {
  return (
    <main className="sign-up-form-container-2">
      <div className="logo brand-logo">
        <img src={Logo} alt="" />
      </div>
      <header>
        <h2>Sign In</h2>
        <p>
          Don’t have an account yet?
          <Link to="/another-sign-up">Sign Up</Link>
        </p>
      </header>

      <form action="">
      
        <span>
          <label htmlFor="">Email</label>
          <input type="text" name="" id="Enter your email address" />
        </span>

        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>

        <p className="forgot-password">Forgot Password?</p>
      </form>

      <div className="form-cta sign-in-form-cta">
        <button>Login</button>

        {/* <p>Don't have an account?</p> */}
      </div>
    </main>
  );
};

export default SignInForm;
