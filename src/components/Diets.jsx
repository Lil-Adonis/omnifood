import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const Diets = () => {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <ul className="list">
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Vegetarian</span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Vegan </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Pescatarian </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Gluten-free </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Lactose-free </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Keto </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Paleo </span>
        </li>
        <li className="list-item">
          <span className="list-icon">
            <IoCheckmarkOutline />
          </span>
          <span>Kid-friendly </span>
        </li>
      </ul>
    </div>
  );
};

export default Diets;
