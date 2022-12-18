import React from 'react';
import './sign-in.css';
import SignInForm from './SignInForm';
import SideSignIn from './SideSignIn';

const SignInContainer = () => {
  return (
    <section className="sign-up-page">
      <SignInForm />
      <SideSignIn />
    </section>
  );
};

export default SignInContainer;
