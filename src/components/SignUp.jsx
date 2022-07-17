import React from "react";
const signUp = () => {
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
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
              />
            </div>

            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="form-group mb-4">
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mb-4">
          <input
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
            <button type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Create Account</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


/*import React from 'react'

const signUp = () => {
  return (
    <div>signUp</div>
  )
}*/

export default signUp