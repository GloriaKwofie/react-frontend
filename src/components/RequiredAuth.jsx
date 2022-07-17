import React from 'react'
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

export default RequiredAuth