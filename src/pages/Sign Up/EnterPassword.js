import React from 'react'
import './sign-up.css'
import SideSignUp from './SideSignUp'
import SignUpForm from './SignUpForm'
const EnterPassword = () => {
  return (
    <section className="sign-up-page">
      <SignUpForm />
      <SideSignUp />
    </section>
  )
}

export default EnterPassword
