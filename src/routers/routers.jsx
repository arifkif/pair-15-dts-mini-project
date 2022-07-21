import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ProtectedComponent from "../components/ProtectedComponent";

const Routers = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <Home />
            </ProtectedComponent>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedComponent>
              <Login />
            </ProtectedComponent>
          }
        />
        <Route path="register" element={<Register />} />
        <Route path=":title" element={<MovieDetail />} />
      </Routes>
      {user && <Footer />}
    </BrowserRouter>
  );
};

export default Routers;
