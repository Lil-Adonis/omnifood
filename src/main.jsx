import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MealsProvider } from "./context/Meals_context";
import { FilterProvider } from "./context/Filter_context";
import { UserProvider } from "./context/User_context";



ReactDOM.createRoot(document.getElementById('root')).render(

    <UserProvider>
      <MealsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </MealsProvider>
    </UserProvider>
  ,
)
