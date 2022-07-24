import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import getLocalStorageInfo from "./utils/getLocalStorageInfo";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/user/auth", {
      method: "POST",
      headers: {
        authorization: getLocalStorageInfo(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setIsAuth(data.isAuthenticated));
  }, []);

  return (
    <>
    <header/>
    <div className="App">
      
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/Login" element={<Login />} />
            </Routes>
            <Routes>
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
