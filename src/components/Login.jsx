import React from "react";


const Login = () => {
  return (
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
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check">
            
          </div>
          <div className="sign-in-button-container ">
            <button type="submit" class="btn btn-primary btn-sm sign-in-button">
              <strong>Submit</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


/*import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    fetch();
  };
  return (
    <form action="" onSubmit={() => {}}>
      <input
        value={email}
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};*/

export default Login;
