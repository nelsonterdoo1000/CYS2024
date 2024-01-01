import React from "react";
import { useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuthContext } from "../State/AuthContext";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const location = useLocation()

  const { user } = useAuthContext()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = user?.resUser;
    if (!userToken) {
      setIsLoggedIn(false);
      return navigate("/reg/login", { state: { from: location }, replace: true });
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};

export default ProtectedRoute;
