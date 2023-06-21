import React from "react";
import { customer_images } from "../utils/constants";

const CustomersImages = () => {
  return (
    <div className="delivered-meals">
      <div className="delivered-imgs">
        {customer_images.map((img, index) => {
          return <img key={index} src={img} alt={`Customer ${index}`} />;
        })}
      </div>
      <p className="delivered-text">
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
};

export default CustomersImages;
