import React from "react";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword"
import AuthorPage from "./Pages/AuthorPage";
import "./Css/Signup.css";
import {  Routes, Route } from "react-router-dom";
import Questions from "./Pages/Questions";
import Instruction from "./Pages/Instruction";
import Profile from "./Pages/Profile";

Profile

const App = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<SignupPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/dashboard" element={<AuthorPage />} />
        <Route exact path="/questions" element={<Questions />} />
        <Route exact path="/Instruction" element={<Instruction />} />
        <Route exact path="/Profile" element={<Profile />} />
        
      </Routes>
   
  );
};

export default App;
