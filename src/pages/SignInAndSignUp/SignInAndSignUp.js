import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import Signup from '../../components/Signup/Signup';

import './SignInAndSignUp.scss'

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <Signup />
  </div>
);

export default SignInAndSignUp;