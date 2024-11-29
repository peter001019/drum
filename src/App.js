import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./page/SignIn";
import Login from "./page/Login";
import Home from "./page/Home";
import Mypage from "./page/Mypage/Mypage";
import EditProfile from "./page/Mypage/EditProfile";
import MonthlyPractice from "./page/Mypage/MonthlyPractice";
import PracticedMusic from "./page/Mypage/PracticedMusic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/MyPage" element={<Mypage />} />
        <Route path="/MyPage/EditProfile" element={<EditProfile />} />
        <Route path="/MyPage/PracticedMusic" element={<PracticedMusic />} />
        <Route path="/MyPage/MonthlyPractice" element={<MonthlyPractice />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
