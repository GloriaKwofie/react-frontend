import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes,} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp'
import getLocalStorageInfo from './utils/getLocalStorageInfo';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    fetch("http://localhost:4000/user/auth", {
      method: "POST",
      headers: {
        authorization: getLocalStorageInfo(),
        "Content-Type": "application/json"
      },
      
    })
    .then((response) => response.json())
    .then(data => setIsAuth(data.isAuthenticated))
  }, [])
  
  return (
    
    <div className='App'>{isAuth? <Home/> : <Login/>}</div>
  );
}

export default App;
