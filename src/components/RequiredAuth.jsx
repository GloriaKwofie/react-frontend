import React from 'react';
import { useNavigate } from "react-router-dom";

const RequiredAuth = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/path/to/push");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

export default RequiredAuth;


/*import React from 'react'
import {Navigate} from "react-router-dom"
import Home from './Home'

const RequiredAuth = ({isAuthenticated, ...rest}) => {
  return (
    <div>isAuthenticated ? (
        <Home/>) : (
            <Navigate to = "/login"/>
        )</div>
  )
}

export default RequiredAuth*/