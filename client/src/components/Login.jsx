import React from 'react'
import SignIn from './Auth/SignIn';
import SignOut from './Auth/SignOut';

function Login() {
  return (
    <div>
      <SignIn />
      <SignOut />
    </div>
  );
}

export default Login