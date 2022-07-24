import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav class="navbar navbar-dark bg-primary">
        <Link to="/Home" className="logo">Home Page</Link>
        <Link to="/SignUp">Register</Link>
        <Link to="/Login">login</Link>
</nav>

  );
};
export default Header;