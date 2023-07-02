import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MealsProvider } from "./context/Meals_context";
import { FilterProvider } from "./context/Filter_context";
import { UserProvider } from "./context/User_context";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <MealsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </MealsProvider>
    </UserProvider>
  </Auth0Provider>,
)
