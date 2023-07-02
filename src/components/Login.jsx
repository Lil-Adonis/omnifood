import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/User_context";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";

const Login = () => {
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <Wrapper>
      {myUser ? (
        <button
          className="auth-btn"
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  .auth-btn {
    display: flex;
    gap: 1rem;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 2.2rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    color: #333;
    transition: all 0.3s;

    padding: 0.5rem 1rem;
    border-radius: 9px;
    color: #fff;
    background-color: #e67e22;
    &:hover,
    &:active {
      background-color: #cf711f;
    }
  }
  @media (max-width: 59em) {
    .auth-btn {
      font-size: 4rem;
    }
  }
`;

export default Login;
