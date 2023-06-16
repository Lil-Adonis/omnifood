import React from "react";
import styled from "styled-components";

import { links } from "../utils/constants";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { useMealsContext } from "../context/Meals_context";


import logo from "../assets/img/omnifood-logo.png";

const Navbar = () => {
  const { showSidebar, closeSidebar, sidebar_open } = useMealsContext();
  return (
    <Wrapper>
      
        <img className="logo" src={logo} alt="omnifood logo" />
      
      <nav className={sidebar_open ? "main-nav nav-open" : "main-nav"}>
        <ul className="main-nav-list">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li onClick={closeSidebar} key={id}>
                <h3 className="main-nav-link"  >
                  {text}
                </h3>
              </li>
            );
          })}
        </ul>
      </nav>
      {sidebar_open ? (
        <button className="btn-mobile-nav" onClick={closeSidebar}>
          <span className="icon-mobile-nav close">
            <IoCloseOutline />
          </span>
        </button>
      ) : (
        <button className="btn-mobile-nav" onClick={showSidebar}>
          <span className="icon-mobile-nav open">
            <IoMenuOutline />
          </span>
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--clr-primary-4);
  //
  position: relative;

	
	
  /* because we want header to be sticky later */
  height: 7rem;
  padding: 0 7.8rem;

  @media (max-width: 75em) {
    & {
      padding: 0 3.2rem;
    }
  }

  /* Mobile */
  .btn-mobile-nav {
    border: none;
    background: none;
    cursor: pointer;
    display: none;
  }
  .icon-mobile-nav {
    font-size: 4.8rem;
    color: #333;
  }
  .close {
    display: none;
  }

  .logo {
    height: 2.2rem;
  }
  .main-nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8.2rem;
   
  }

  .main-nav-link:link,
  .main-nav-link:visited {
    display: inline-block;
    text-decoration: none;
    text-transform: capitalize;
    color: #333;
    font-weight: 500;
    font-size: 1.8rem;
    transition: all 0.3s;
  }

  .main-nav-link:hover,
  .main-nav-link:active {
    color: var(--clr-primary-2);
  }

  @media (max-width: 59em) {
    .btn-mobile-nav {
      display: block;
      z-index: 1;
    }
    .main-nav {
      background-color: rgba(255, 255, 255, 0.97);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translateX(100%);

      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-in;

      background: #d8f5cc;
      border-radius: 50px;
      padding: 1rem 2rem;

      /* Hide navigation */
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    .main-nav-list {
      flex-direction: column;
      gap: 4.8rem;
    }
    .main-nav-link:link,
    .main-nav-link:visited {
      font-size: 4rem;
    }
    .nav-open {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
    }
    .open {
      display: block;
    }
    .close {
      display: block;
    }
  }
`;

export default Navbar;
