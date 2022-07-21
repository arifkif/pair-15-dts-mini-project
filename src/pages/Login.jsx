import React, { useState } from "react";
import { onHandleSignInWithEmailAndPassword } from "../authentication/firebase";
import bg from "../assets/ProfilePicture.png";
import logo from "../assets/logo.svg";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const navigate = useNavigate();

  const onHandleSignIn = () => {
    onHandleSignInWithEmailAndPassword(email, password);
  };

  const onHandleSignUp = () => {
    navigate("/register");
  };

  return (
    <div className="flex  h-screen">
      <div
        className="w-3/6 bg-[#FFFFFF]  bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="flex justify-center w-3/6 p-5 flex-col bg-[#000000] text-white h-screen backdrop-opacity-10 ">
        <img src={logo} alt="logo" className="w-[100px] mb-10 self-center" />

        <div>
          <input
            className="bg-[#111111] w-3/6  p-3 mb-3 border border-[#404040] placeholder:text-[#404040] placeholder:tracking-widest placeholder:font-bold"
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <input
            className="bg-[#111111] w-3/6 p-3 mb-5 border border-[#404040] placeholder:text-[#404040] placeholder:tracking-widest placeholder:font-bold"
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button
          className="bg-[#E50913] self-center w-3/6 p-3 mb-5 font-bold tracking-widest"
          onClick={onHandleSignIn}
        >
          LOGIN
        </button>
        <div className="mb-5">Don't have an account?</div>
        <button
          className="bg-[#e8be32] self-center w-3/6 p-3 mb-5 font-bold tracking-widest"
          onClick={onHandleSignUp}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Login;
