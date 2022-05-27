import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "@mui/material";

const LoginWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = ({ onAuthSubmit }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAuthSubmit({
      email: username,
      password
    });
  };

  return (
    <LoginWrapper>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </LoginWrapper>
  );
};
LoginForm.propTypes = {
  onAuthSubmit: PropTypes.func.isRequired
};
