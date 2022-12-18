import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.css';
import brandLogo from '../../images/logo.svg'

const SignUpForm = () => {
  return (
    <main className="sign-up-form-container-2">
      <div className="logo brand-logo">
        <img src={brandLogo} alt="" />
      </div>
      <header>
        <h2>Admin Sign Up</h2>
        <p>
          Already have an account?
          <Link to="/another-sign-in">Sign In</Link>
        </p>
      </header>

      <form action="">
        <span>
          <label htmlFor="">Email</label>
          <input type="text" value={'olakunbiolabode01@gmail.com'} name="" id="Enter your email address" />
        </span>
        <span>
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" />
        </span>
        <span>
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="" id="" />
        </span>
      </form>

      <div className="form-cta">
        <button>Sign Up</button>

        {/* <p>Already have an account?</p> */}
      </div>
    </main>
  );
};

export default SignUpForm;
