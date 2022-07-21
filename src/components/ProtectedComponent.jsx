/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const ProtectedComponent = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
      return;
    } else {
      navigate("/login");
    }
  }, [navigate, user]);
  if (loading) {
    return;
  }
  return children;
};

export default ProtectedComponent;
