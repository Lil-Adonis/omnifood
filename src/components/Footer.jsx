import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { social_links } from "../utils/constants";
import { account_links } from "../utils/constants";
import { company_links } from "../utils/constants";
import { resources_links } from "../utils/constants";
import logo from "../assets/img/omnifood-logo.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container grid grid--footer">
        <div className="logo-col">
          <Link to="/" className="footer-logo">
            <img className="logo" src={logo} alt="Omnifood logo" />
          </Link>

          <ul className="social-links">
            {social_links.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="footer-link" to="/">
                    <span className="social-icon">{item}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <p className="copyright">
            Copyright &copy; 2022 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            {account_links.map((link, index) => {
              return (
                <li key={index}>
                  <Link className="footer-link" to="/">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            {company_links.map((link, index) => {
              return (
                <li key={index}>
                  <Link className="footer-link" to="/">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            {resources_links.map((link, index) => {
              return (
                <li key={index}>
                  <Link className="footer-link" to="/">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 12.8rem 0;
  border-top: 1px solid #eee;

  .grid--footer {
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
  }

  .logo-col {
    display: flex;
    flex-direction: column;
  }

  .logo {
    height: 2.2rem;
  }

  .footer-logo {
    display: block;
    margin-bottom: 3.2rem;
  }

  .social-links {
    list-style: none;
    display: flex;
    gap: 2.4rem;
  }

  .social-icon {
    font-size: 2.3rem;
  }

  .copyright {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #767676;
    margin-top: auto;
  }

  .footer-heading {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  .address {
    margin-bottom: 2.4rem;
  }

  .contacts {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;
  }

  .footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;
    transition: all 0.3s;
  }

  .footer-link:hover,
  .footer-link:active {
    color: #555;
  }

  @media (max-width: 44em) {
    .nav-col {
      grid-row: 1;
      grid-column: span 2;
    }
    .grid--footer {
      grid-template-columns: repeat(6, 1fr);
    }
    .logo-col,
    .address-col {
      grid-column: span 3;
    }
  }
`;

export default Footer;
