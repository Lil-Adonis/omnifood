import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import Featured from "../components/Featured";
import FeaturedMeals from "../components/FeaturedMeals";






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
