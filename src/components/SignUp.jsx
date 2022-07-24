import React, { useState } from 'react';
import { signUp } from '../Api'

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isError, setIsError] = useState(false);
  let body = ''

  const signUpUser = async (e) => {
    e.preventDefault();
    body = await signUp(userName, email, password);
    console.log(body);
    body.isAuthenticated && setIsSignedUp(true);
    body.error && setIsError(true)
  };

  return (
    <div className="card-sign-in">
      <div className="card-body">
        <div className="container-title-card">
          <h1 class="card-title">SignUp here</h1>
          <p>
            And start having the best experience!!!
          </p>
        </div>
        <form>
          <div class="row mb-4">
            <div class="col">First name
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>

            <div class="col">Last name
              <input 
              onChange={(e) => setUserName(e.target.value)}
              type="text" 
              class="form-control" 
              placeholder="Last name" />
            </div>
          </div>
          <div class="form-group mb-4"> Email
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-4"> Password
          <input
              onChange={(e) => setPassword(e.target.value)}
              type="pasword"
              class="form-control"
              id="inputPassword"
              placeholder="Password"
            />
            <div>
            <label for="inputAddress2">Your password must be at least 8 characters and include a number or special chatacter.</label>
            </div>
          </div>

          <div class="form-group mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                I agree to the  <em>Terms of Use</em> and{" "}
                <em>Privacy</em>.
              </label>
            </div>
          </div>

          <div className="sign-in-button-container">
            <button onClick={signUpUser} type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Create Account</strong>
            </button>
          </div>
          {isSignedUp ? <div className="formResponse">Account Exist</div> : <div>{body.error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Form;



