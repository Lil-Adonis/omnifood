import React from "react";
import {
  Hero,
  Featured,
  HowItWorks,
  Testimonials,
  FeaturedMeals,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />;
      <Featured />
      <HowItWorks />
      <FeaturedMeals />
      <Testimonials />
    </main>
  );
};

export default HomePage;
