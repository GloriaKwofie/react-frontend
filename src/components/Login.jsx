import React, { useState } from 'react';
import { signIn } from '../Api';
import Home from './Home';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigned, setIsSigned] = useState(false);
  const [isSignError, setIsSignError] = useState(false);

  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
    if (body.isAuthenticated) {
      setIsSigned(true);
    } else {
      setIsSignError(true);
    }
  };

  return (
    <>
      {!isSigned ? (
        <>
          <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h1 class="card-title">Sign In</h1>
          <p>Do you have an account?</p>
        </div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            
          </div>
          <div className="sign-in-button-container ">
            <button onClick={signInUser} type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Submit</strong>
            </button>
          </div>
          {isSignError && (<div className='formResponse'>User does not Exist</div>)}
        </form>
      </div>
      </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Form;


