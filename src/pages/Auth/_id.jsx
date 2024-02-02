import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const nav = useNavigate();
  const login = () => {
    nav("home");
  };
  return (
    <>
      <Button onClick={login} variant="text">
        Home
      </Button>
    </>
  );
};

export default Auth;
