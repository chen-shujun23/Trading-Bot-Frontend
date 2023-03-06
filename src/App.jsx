import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";

import NavBar from "./components/NavBar";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";
import Create from "./pages/Create";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyStrategies from "./pages/MyStrategies";
import Register from "./pages/Register";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/my-strategies" element={<MyStrategies />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
