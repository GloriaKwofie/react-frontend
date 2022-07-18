import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="card">
      <div class="card-body">
        <div className="container-title-card">
          <h1 class="card-title">Are you a music lover?</h1>
          <h3>Then this is what you have been waiting for!!!</h3>
          <h3>Learn to Play any instrument or sing</h3>
        </div>
        <div className="container-data-card-main">
          <div className="container-data-card">
            <h2>
              <strong>
                4,99 €<small className="small-time">/month</small>
              </strong>
            </h2>
            <h3>You can't Miss out on this great offer</h3>
          </div>
          <div className="container-data-card">
            <h2>
              <strong>
                69,99 €<small className="small-time">/yearly</small>
              </strong>
            </h2>
            <h3>20% discount on yearly suscription!!!</h3>
          </div>
        </div>

        <div className="buttons-card">
          <button type="button" class="btn btn-primary btn-sm button-link">
            <Link to="/Login" class="card-link text-light">
              Sign In
            </Link>
          </button>

          <button type="button" class="btn btn-primary btn-sm button-link">
            <Link to="/SignUp" class="card-link text-light">
              Sign Up Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};



export default Home