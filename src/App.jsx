import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Auth from "./Auth/Auth";
import SignIn from "./Auth/SignIn";
import Home from "./Home/Home"
import SignInOptions from "./Auth/SignInOptions";
import AdminSignIn from "./Admin/AdminSignIn";
import AgencySignIn from "./Agency/AgencySignIn";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/user-signIn" element={<SignIn />} />
        <Route path="/sign-in-options" element={<SignInOptions />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/admin-login" element={<AdminSignIn />}/>
        <Route path="/agency-login" element={<AgencySignIn />}/>
      </Routes>
    </Router>
  );
}

export default App;
