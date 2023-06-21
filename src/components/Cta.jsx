import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

const Cta = () => {
  const { user, isAuthenticated } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      <div className="container">
        <span className="subheading">Sign up</span>
        {isUser && user.name && (
          <h2 className="heading-secondary">
            Welcome, <strong>{user.name.toUpperCase()}</strong>
          </h2>
        )}
      </div>
      <div className="container cta-container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form
              className="cta-form"
              action="https://formspree.io/f/myyaekqz"
              method="POST"
            >
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  name="full-name"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4.8rem 0 12.8rem;

  .cta {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #e67e22;
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
    border-radius: 11px;
    overflow: hidden;
    background-image: linear-gradient(to right bottom, #eb984e, #e67e22);
  }

  .cta-text-box {
    padding: 4.8rem 6.4rem 6.4rem 6.4rem;
    color: #45260a;
  }

  .cta .heading-secondary {
    color: inherit;
    margin-bottom: 3.2rem;
  }

  .cta-text {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 4.8rem;
  }

  .cta-img-box {
    background-image: linear-gradient(
        to right bottom,
        rgba(235, 151, 78, 0.35),
        rgba(230, 125, 34, 0.35)
      ),
      url("https://i2.wp.com/bloggers.society19.com/wp-content/uploads/2015/11/photo-1588123190131-1c3fac394f4b-2.jpg?resize=550%2C550&ssl=1");
    background-size: cover;
    background-position: center;
  }

  .cta-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
    row-gap: 2.4rem;
  }

  @media (max-width: 59em) {
    .cta {
      grid-template-columns: 3fr 2fr;
    }
    .cta-form {
      grid-template-columns: 1fr;
    }
  }

  .cta-form label {
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  .cta-form input,
  .cta-form select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: #fdf2e9;
    border-radius: 9px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .cta-form input::placeholder {
    color: #aaa;
  }

  .cta *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
  }
  @media (max-width: 34em) {
    .cta {
      grid-template-columns: 1fr;
    }
    .cta-img-box {
      grid-row: 1;
      height: 32rem;
    }
    .cta-text-box {
      padding: 3.2rem;
    }
    .cta-container {
      padding-top: 3rem;
    }
  }
`;

export default Cta;
